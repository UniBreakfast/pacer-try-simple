var state

const defaultState = {
  confidence: 0,
  activities: [],
  quests: []
}

loadStateFromLS()

window.addEventListener('keydown', e => {
  if (e.ctrlKey && !e.shiftKey && e.code === 'KeyS') {
    e.preventDefault()

    saveStateToLS()

    alert('State saved to localStorage!')
  }
})

function loadStateFromLS() {
  state = JSON.parse(localStorage.getItem('pacer-simple-state'))
    || defaultState
}

function saveStateToLS() {
  localStorage.setItem('pacer-simple-state', JSON.stringify(state))
}
