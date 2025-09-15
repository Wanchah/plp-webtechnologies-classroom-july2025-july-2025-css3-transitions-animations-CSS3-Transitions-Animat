// Part 2: JavaScript Functions

// Global state variable
let isActive = false;

/**
 * Toggles a class on an element
 * @param {HTMLElement} element - The target element
 * @param {string} className - The class to toggle
 * @returns {boolean} - Whether the class is now present
 */
function toggleClass(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

/**
 * Handles box animation toggle
 * Demonstrates local scope and reuse
 */
function toggleBox() {
  const box = document.getElementById('animatedBox'); // local scope
  isActive = toggleClass(box, 'active'); // reuse logic
  console.log('Box is active:', isActive); // return value used
}
// Spinner toggle function
let isSpinning = true;

/**
 * Toggles spinner between spinning and rolling
 */
function toggleMotion() {
  const spinner = document.getElementById('spinner');

  if (isSpinning) {
    spinner.classList.remove('spinTilt');
    spinner.classList.add('roll');
  } else {
    spinner.classList.remove('roll');
    spinner.classList.add('spinTilt');
  }

  isSpinning = !isSpinning;
}