showGoToIndex()

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    e.preventDefault()

    openPageIndex()
  }
})

function openPageIndex() {
  location.href = 'index.html'
}

function showGoToIndex() {
  const indexButton = document.createElement('button')

  indexButton.innerText = 'Go to Index'
  indexButton.onclick = openPageIndex

  body.append(indexButton)

  indexButton.style.position = 'fixed'
  indexButton.style.top = '10px'
  indexButton.style.left = '10px'
  indexButton.style.width = 'max-content'
}
