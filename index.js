// index.js

// Add a new element to the DOM
function addElementToDOM(targetId, text) {
  const target = document.getElementById(targetId)
  if (!target) return
  const p = document.createElement('p')
  p.textContent = text
  target.appendChild(p)
}

// Remove an element from the DOM by ID
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (!element) return
  element.remove()
}

// Simulate a button click by adding text to a target element
function simulateClick(targetId, text) {
  addElementToDOM(targetId, text)
}

// Handle form submission, validate input, and update DOM
function handleFormSubmit(formId, targetId) {
  const form = document.getElementById(formId)
  if (!form) return

  const input = form.querySelector('input')
  const target = document.getElementById(targetId)
  const errorMessage = document.getElementById('error-message')

  if (!input.value.trim()) {
    if (errorMessage) {
      errorMessage.textContent = 'Input cannot be empty'
      errorMessage.classList.remove('hidden')
    }
    return
  }

  addElementToDOM(targetId, input.value)
  input.value = ''

  if (errorMessage) {
    errorMessage.textContent = ''
    errorMessage.classList.add('hidden')
  }
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
