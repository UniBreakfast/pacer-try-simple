const activityList = document.getElementById('activities')

// showActivities()

window.addEventListener('load', showActivities)

function showActivities() {
  const activityItems = state.activities.map(buildActivityItem)
    
  activityList.replaceChildren(...activityItems)
}

function buildActivityItem(activity) {
  const {text, amount, difficulty} = activity
  const item = document.createElement('li')

  item.innerHTML = `
    <span title="activity text">${text}</span>,
    <span title="amount in units">${amount}</span>,
    <span title="difficulty">${difficulty}</span>
  `
  
  return item
}
