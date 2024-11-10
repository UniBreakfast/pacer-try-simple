const todoListsForm = document.getElementById('form')
const todoList = document.getElementById('todo-list')

todoListsForm.date.value = new Date().toISOString().slice(0, 10)

todoListsForm.date.onchange = handleDateChange
todoListsForm.onsubmit = handleSubmit

window.addEventListener('load', handleDateChange)

function handleDateChange() {
  const date = todoListsForm.date.value
  const list = makeTodoList(date)

  showTodoList(list)
}

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(todoListsForm)
  const { date, ...report } = Object.fromEntries(formData)
  const updates = Object.entries(report)
    .filter(([_, value]) => value)

  for (const [key, status] of updates) {
    const { start, text, amount } = JSON.parse(key)
    const quest = state.quests.find(
      quest => quest.start == start &&
        quest.activity.text == text && 
          quest.activity.amount == amount
    )
    updateTodo(quest, date, status)
  }

  window.dispatchEvent(new Event('load'))
}

function showTodoList(list) {
  const todoItems = list.map(makeTodoItem)

  todoList.replaceChildren(...todoItems)
}

function makeTodoList(date) {
  const list = []

  for (const quest of state.quests) {
    if (quest.start > date) continue
    if (quest.todos.at(-1).date < date) continue

    for (const todo of quest.todos) {
      if (todo.date > date) break
      if (todo.date === date) {
        const todoDescriptor = {
          locked: todo.locked,
          done: todo.done,
          failed: todo.failed,
          text: quest.activity.text,
          amount: quest.activity.amount,
          reward: todo.reward,
          start: quest.start,
          duration: quest.duration,
          day: todo.day,
          inertia: todo.inertia,
          pledge: quest.pledge,
        }

        list.push(todoDescriptor)
        break
      }
    }
  }

  return list
}

function makeTodoItem(todoDescriptor) {
  const item = document.createElement('li')
  const {
    locked, done, failed, text, amount, reward,
    start, duration, day, inertia, pledge,
  } = todoDescriptor
  const nameValue = JSON.stringify({ start, text, amount })
  const expected = !locked && !done && !failed
  const ifDisabled = expected ? '' : 'disabled'
  const ifLast = day === duration && !inertia ?
    `, +${pledge}` : ''
  const options = locked ? `<option value="locked">🔒</option>` :
    done ? `<option value="done">✔️</option>` :
    failed ? `<option value="failed">❌</option>` : `
      <option value="">❔</option>
      <option value="done">✔️</option>
      <option value="failed">❌</option>
    `
  const dayCount = inertia ? `&lt;Inertia ${inertia}&gt;` :
    `(<span>${day}</span> of <span>${duration}</span>)`
  const rewardInfo = done ? `<b><u>+${reward + ifLast}</u></b>` :
    failed ? `<s>+${reward + ifLast}</s>` : `<i>+${reward + ifLast}?</i>`

  item.innerHTML = `
    <select name='${nameValue}' ${ifDisabled}>${options}</select>
    &nbsp; <span>${text}</span>,
    <span>${amount}</span> &nbsp;
    <span>${dayCount}</span> &nbsp;
    <span>${rewardInfo}</span>
  `

  return item
}

function updateTodo(quest, date, status) {
  const todo = quest.todos.find(todo => todo.date === date)

  todo[status] = true

  if (status === 'done') {
    state.confidence += todo.reward

    if (todo.inertia) {
      const newTodo = {
        ...todo,
        date: makeNextDate(date),
        done: false,
        inertia: todo.inertia + 1,
      }
      quest.todos.push(newTodo)

    } else if (todo.day === quest.duration) {
      const newTodo = {
        ...todo,
        date: makeNextDate(date),
        done: false,
        inertia: 1,
      }
      quest.todos.push(newTodo)
      quest.completed = true
      state.confidence += quest.pledge

    } else {
      const nextTodo = quest.todos[todo.day]

      nextTodo.locked = false
    }
  } else if (status === 'failed') {
    quest.end = date

    if (!todo.inertia) {
      quest.failed = true
      quest.todos.length = todo.day
    }
  }
}

function makeNextDate(date0) {
  const date = new Date(date0)

  date.setDate(date.getDate() + 1)

  return date.toISOString().slice(0, 10)
}
