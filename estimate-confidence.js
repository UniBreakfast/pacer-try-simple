const estimateConfidenceForm = document.getElementById('form')

estimateConfidenceForm.onsubmit = handleSubmit

function handleSubmit(e) {
  e.preventDefault()

  const confidence = parseInt(
    estimateConfidenceForm.confidence.value
  )

  state.confidence = confidence

  // alert('Confidence is set to ' + confidence + '!')

  window.dispatchEvent(new Event('load'))
}
