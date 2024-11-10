window.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.code === 'KeyS') {
    e.preventDefault()

    saveStateToFS()
  } else if (e.ctrlKey && e.shiftKey && e.code === 'KeyL') {
    e.preventDefault()

    loadStateFromFS()
  }
})

function saveStateToFS() {
  const date = new Date()
  const fileName = `pacer-simple-${date.toISOString().slice(0, 10)}.json`
  const data = JSON.stringify(state, null, 2)
  const blob = new Blob([data], { type: 'text/json' })
  const link = document.createElement('a')

  body.append(link)
  link.href = URL.createObjectURL(blob)
  link.download = fileName
  link.style.display = 'none'
  link.click()

  setTimeout(() => {
    link.remove()
    URL.revokeObjectURL(link.href)
  }, 0)
}

async function loadStateFromFS() {
  const [fileHandle] = await showOpenFilePicker({
    types: [{
      description: 'JSON Files',
      accept: {'application/json': ['.json']},
    }],
  });

  const file = await fileHandle.getFile();
  const text = await file.text();

  state = JSON.parse(text);

  window.dispatchEvent(new Event('load'));
}
