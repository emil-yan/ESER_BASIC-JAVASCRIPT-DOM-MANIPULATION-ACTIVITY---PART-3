/**
 * script.js — Part 3: Username & Password Input
 *
 * DOM Manipulation feature:
 *  handleSubmit() — reads the username and password input fields,
 *                   then logs both values to the browser's console.
 *
 * Open DevTools (F12) → Console tab to see the output after clicking Submit.
 */

/**
 * handleSubmit
 * Retrieves values from the username and password inputs
 * and logs them to the console (matching the professor's demo output).
 */
function handleSubmit() {
  // Get the input elements from the DOM
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");

  // Read their current values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Log to browser console — visible in DevTools → Console
  console.log("Username: " + username);
  console.log("Password: " + password);
}
