const editActivityForm = document.getElementById('form')
const activitySelect = editActivityForm.activity

// fillActivitySelect()

editActivityForm.activity.onchange = handleActivityChange
editActivityForm.onsubmit = handleSubmit

window.addEventListener('load', fillActivitySelect)

function fillActivitySelect(e) {
  const activityOptions = state.activities.map(buildActivityOption)
  const baseOption = new Option('Select an activity', '')

  baseOption.setAttribute('selected', '')
  baseOption.disabled = true
  baseOption.hidden = true
  activityOptions.unshift(baseOption)

  activitySelect.replaceChildren(...activityOptions)

  if (e.detail) {
    activitySelect.selectedIndex = e.detail.i + 1
    activitySelect.dispatchEvent(new Event('change'))
  }
}

function buildActivityOption(activity) {
  const {text, amount, difficulty} = activity
  const option = new Option(
    `${text}, ${amount}, ${difficulty}`,
    JSON.stringify(activity)
  )

  return option
}

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(editActivityForm)
  let { activity, text, amount, difficulty } = Object.fromEntries(formData)

  activity = JSON.parse(activity)
  difficulty = parseInt(difficulty)
  
  const i = state.activities.findIndex(
    a => a.text == activity.text && a.amount == activity.amount && a.difficulty == activity.difficulty
  )

  updateActivity(i, { text, amount, difficulty })

  const event = new Event('load')

  event.detail = {i}

  window.dispatchEvent(event)
}

function updateActivity(i, activity) {
  state.activities[i] = activity
}

function handleActivityChange() {
  const activity = JSON.parse(activitySelect.value)
  const prevOption = activitySelect.querySelector('[selected]')
  const nextOption = activitySelect[activitySelect.selectedIndex]

  prevOption.removeAttribute('selected')
  nextOption.setAttribute('selected', '')
  editActivityForm.text.value = activity.text
  editActivityForm.amount.value = activity.amount
  editActivityForm.difficulty.value = activity.difficulty
  editActivityForm.text.setAttribute('value', activity.text)
  editActivityForm.amount.setAttribute('value', activity.amount)
  editActivityForm.difficulty.setAttribute('value', activity.difficulty)
}

function escape(str) {
  return str.replaceAll("'", `&#39;`)
}
