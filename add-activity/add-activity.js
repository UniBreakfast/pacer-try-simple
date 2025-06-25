const addActivityForm = document.getElementById('form')

addActivityForm.onsubmit = handleSubmit

function handleSubmit(e) {
  e.preventDefault()

  const formData = new FormData(addActivityForm)
  const { text, amount, difficulty } = Object.fromEntries(formData)

  const activity = makeActivity(
    text, amount, parseInt(difficulty)
  )

  state.activities.push(activity)

  alert('Activity added!')
}

function makeActivity(text, amount, difficulty) {
  return { text, amount, difficulty }
}
