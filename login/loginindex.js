// Fetch API for login
const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
  
      if (response.ok) {
        const data = await response.json();
        // Process the data returned from the API
        console.log('Login successful:', data);
        // Perform additional actions, such as updating UI or setting authentication tokens
      } else {
        // Handle error response from the API
        console.error('Login failed:', response.statusText);
        // Perform error handling, such as showing an error message
      }
    } catch (error) {
      // Handle any other errors, such as network issues
      console.error('An error occurred:', error);
      // Perform error handling, such as showing an error message
    }
  };
  
  // Fetch API for signup
  
// Function to handle sign up
const signupUser = async () => {
  // Get form input values
  const userName = document.getElementById('UserName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:3005/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, email, password }) // Use the collected form input values
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Signup successful:', data);
      // Perform additional actions, such as updating UI or setting authentication tokens
    } else {
      console.error('Signup failed:', response.statusText);
      // Perform error handling, such as showing an error message
    }
  } catch (error) {
    console.error('An error occurred:', error);
    // Perform error handling, such as showing an error message
  }
};
  