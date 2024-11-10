window.addEventListener('load', showConfidenceHUD)

function showConfidenceHUD() {
  const confidenceOutput = document.getElementById('confidence') 
    || document.createElement('output')

  confidenceOutput.id = 'confidence'
  confidenceOutput.innerText = state.confidence

  body.append(confidenceOutput)

  confidenceOutput.style.position = 'fixed'
  confidenceOutput.style.top = '10px'
  confidenceOutput.style.right = '10px'
  confidenceOutput.style.width = 'max-content'
}
