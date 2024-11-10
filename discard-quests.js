const discardQuestsForm = document.getElementById('form')
const questList = document.getElementById('quests')

// showQuests()

window.addEventListener('load', showQuests)

discardQuestsForm.onsubmit = handleSubmit

function showQuests() {
  const questItems = state.quests.map(buildQuestItem)
  
  questList.replaceChildren(...questItems)
}

function buildQuestItem(quest) {
  const { activity: {text, amount}, start } = quest
  const item = document.createElement('li')
  const nameValue = JSON.stringify({ start, text, amount })

  item.innerHTML = ` 
    <label>
      <input type="checkbox" name='${escape(nameValue)}'> &nbsp;
      <span>${start}</span> &nbsp;
      <span>${text}</span>,
      <span>${amount}</span>
    </label>
  `
  return item
}

function escape(str) {
  return str.replaceAll("'", `&#39;`)
}

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(discardQuestsForm)
  const entries = [...formData]

  if (confirm('Are you sure you want to discard these quests?')) {
    const indices = entries.map(([description]) => {
      const { start, text, amount } = JSON.parse(description)
      return state.quests.findIndex(
        quest => quest.start == start && quest.activity.text == text && quest.activity.amount == amount
      )
    })
    deleteQuests(indices)
    window.dispatchEvent(new Event('load'))
  }
}

function deleteQuests(indices) {
  state.quests = state.quests.filter((_, i) => !indices.includes(i))
}
