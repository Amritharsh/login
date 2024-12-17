const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    errorMessage.textContent = 'Please fill in both fields.';
    errorMessage.style.display = 'block';
    return;
  }

  // Dummy authentication logic
  if (username === 'admin' && password === '1234') {
    errorMessage.style.display = 'none';
    alert('Login successful!');
    // Redirect to Google
    window.location.href = 'https://91club.net/';
  } else {
    errorMessage.textContent = 'Invalid username or password.';
    errorMessage.style.display = 'block';
  }
});
