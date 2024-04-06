document.addEventListener('DOMContentLoaded', function() {
  const heading = document.getElementById('heading');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');


  // Event listener for heading click
  heading.addEventListener('click', function() {
    if (loginForm.classList.contains('hidden')) {
      loginForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
    } else {
      loginForm.classList.add('hidden');
      signupForm.classList.remove('hidden');
    }
  });

  // Event listener for login button click
  document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Get username and password input values
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if username and password are correct
    if (username === 'purrfecthealth' && password === 'meow') {
      // If correct, navigate to the desired page
      window.location.href = './main.html';
    } else {
      // If incorrect, display an alert or error message
      alert('Incorrect username or password. Please try again.');
    }
  });

  
});

  