// Fetch API for login
const loginUser = async (eml, pwd) => {
    try {
      const response = await fetch('http://localhost:3005/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ eml, pwd })
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
  const signupUser = async (username, password, email) => {
    try {
      const response = await fetch('https://example.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, email })
      });
  
      if (response.ok) {
        const data = await response.json();
        // Process the data returned from the API
        console.log('Signup successful:', data);
        // Perform additional actions, such as updating UI or setting authentication tokens
      } else {
        // Handle error response from the API
        console.error('Signup failed:', response.statusText);
        // Perform error handling, such as showing an error message
      }
    } catch (error) {
      // Handle any other errors, such as network issues
      console.error('An error occurred:', error);
      // Perform error handling, such as showing an error message
    }
  };
  