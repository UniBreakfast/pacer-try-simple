const discardActivitiesForm = document.getElementById('form')
const activityList = document.getElementById('activities')

// showActivities()

window.addEventListener('load', showActivities)

discardActivitiesForm.onsubmit = handleSubmit

function showActivities() {
  const activityItems = state.activities.map(buildActivityItem)
  
  activityList.replaceChildren(...activityItems)
}

function buildActivityItem(activity) {
  const { text, amount, difficulty } = activity
  const item = document.createElement('li')
  const nameValue = JSON.stringify({ text, amount, difficulty });

  item.innerHTML = ` 
    <label>
      <input type="checkbox" name='${escape(nameValue)}'> &nbsp;
      <span>${text}</span>,
      <span>${amount}</span>,
      <span>${difficulty}</span>
    </label>
  `
  return item
}

function escape(str) {
  return str.replaceAll("'", `&#39;`)
}

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(discardActivitiesForm)
  const entries = [...formData]

  if (confirm('Are you sure you want to discard these activities?')) {
    const indices = entries.map(([description]) => {
      const { text, amount, difficulty } = JSON.parse(description)
      return state.activities.findIndex(
        activity => activity.text == text && activity.amount == amount && activity.difficulty == difficulty
      )
    })
    deleteActivities(indices)
    window.dispatchEvent(new Event('load'))
  }
}

function deleteActivities(indices) {
  state.activities = state.activities.filter((_, i) => !indices.includes(i))
}
