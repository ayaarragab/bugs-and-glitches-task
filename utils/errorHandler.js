const serverErrorsHandler = (response, error) => { // Define a function to handle server errors, taking response and error as parameters
  console.error(error); // Log the error to the console for debugging purposes
  return response.status(500).json({ // Set the HTTP status code to 500 (Internal Server Error) and return a JSON response
    "status": "error", // Indicate the status of the response as "error"
    "message": "An internal server error occurred.", // Provide a general error message
    "error": { // Include an error object with additional details
      "code": 500, // Specify the error code
      "details": "Please try again later." // Provide a generic message asking the user to try again later
    }
  });
}

export default serverErrorsHandler; // Export the serverErrorsHandler function as the default export of the module
