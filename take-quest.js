const takeQuestForm = document.getElementById('form')

takeQuestForm.start.setAttribute(
  'value', 
  takeQuestForm.start.value = new Date().toISOString().slice(0, 10)
)

// fillActivitySelect()

window.addEventListener('load', fillActivitySelect)
window.addEventListener('load', showConfidence)

takeQuestForm.onsubmit = handleSubmit
takeQuestForm.calc.onclick = handleCalc

function fillActivitySelect() {
  const activitySelect = takeQuestForm.activity
  const activityOptions = state.activities.map(buildActivityOption)

  activitySelect.replaceChildren(...activityOptions)
}

function buildActivityOption(activity) {
  const {text, amount, difficulty} = activity
  const option = new Option(
    `${text}, ${amount}, ${difficulty}`,
    JSON.stringify(activity)
  )

  return option
}

function showConfidence() {
  const confidenceOutput = takeQuestForm.confidence

  confidenceOutput.value = state.confidence
}

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(takeQuestForm)
  const { 
    activity, start, duration, pledge 
  } = Object.fromEntries(formData)

  const quest = makeQuest(
    JSON.parse(activity),
    start,
    parseInt(duration),
    parseInt(pledge),
  )

  state.quests.push(quest)
  state.confidence -= quest.pledge

  alert('Quest taken!')
  takeQuestForm.reset()

  window.dispatchEvent(new Event('load'))
}

function makeQuest(activity, start, duration, pledge) {
  const lastSimilarQuest = state.quests.find(
    q => q.activity.text == activity.text && q.activity.amount == activity.amount 
      && q.todos.at(-1).date == start && q.todos.at(-1).inertia
  )
  const lastSimilarTodo = lastSimilarQuest?.todos.at(-1)
  const sequence = lastSimilarTodo?.consecutive || 0
  const quest = {
    activity, start, duration, pledge,
    todos: makeTodos(start, duration, activity.difficulty, sequence),
    completed: false,
    failed: false,
    end: null,
  }
  if (lastSimilarQuest) {
    lastSimilarQuest.todos.length--
    lastSimilarTodo.end = lastSimilarQuest.todos.at(-1).date
  }
  
  return quest
}

function makeTodos(start, duration, difficulty, sequence = 0) {
  const todos = []

  for (let i = 0; i < duration; i++) {
    const todo = {
      day: i + 1,
      consecutive: sequence + i + 1,
      date: makeShiftedDate(start, i),
      reward: calcReward(sequence + i + 1, difficulty),
      locked: Boolean(i),
      done: false,
      failed: false,
      inertia: false,
    }
    
    todos.push(todo)
  }

  return todos
}

function makeShiftedDate(date0, shift) {
  const date = new Date(date0)

  date.setDate(date.getDate() + shift)
  
  return date.toISOString().slice(0, 10)
}

function calcReward(day, difficulty) {
  const reward = Math.min(
    Math.floor(Math.sqrt(day)),
    difficulty,
  )

  return reward
}

function handleCalc() {
  const duration = parseInt(takeQuestForm.duration.value)
  const {difficulty} = JSON.parse(takeQuestForm.activity.value)
  const questCost = calcQuestCost(duration, difficulty)
  
  takeQuestForm.pledge.value = questCost
}

function calcQuestCost(duration, difficulty) {
  return duration * difficulty
}
