window.addEventListener('load', showConfidenceHUD)

function showConfidenceHUD() {
  const confidenceOutput = document.getElementById('confidence') 
    || document.createElement('output')

  confidenceOutput.id = 'confidence'
  confidenceOutput.innerText = state.confidence

  confidenceOutput.className = state.confidence < 10 ? '' :
    'two-digits'

  body.append(confidenceOutput)
}
