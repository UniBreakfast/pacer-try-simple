window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    e.preventDefault()

    openPageIndex()
  }
})

function openPageIndex() {
  location.href = 'index.html'
}
