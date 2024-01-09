// todoManager.js
// todoManager.js

const taskInput = document.querySelector('.input'); // Input field for the task
const dateInput = document.querySelector('.schedule-date'); // Input field for the due date
const addBtn = document.querySelector('.add-task-button'); // Button to add a todo

// Other code in todoManager.js...

// Example POST request to add a todo
function addTodo(taskData) {
    fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data (like updating UI)
      console.log('Added todo:', data);
      // Potentially update the UI with the newly added todo
    })
    .catch(error => {
      // Handle errors
      console.error('Error adding todo:', error);
    });
  }
  
  // Other functions related to managing todos may go here
  // todoManager.js

// ... (previous code)

addBtn.addEventListener('click', () => {
    const taskData = {
      task: taskInput.value,
      dueDate: dateInput.value,
      // Include other properties as needed for your Todo model
    };
  
    // Call the addTodo function with the taskData
    addTodo(taskData);
  });
  
  // ... (other code in todoManager.js)
  
  // Example usage:
  // addTodo({ task: 'Your task data', /* other todo properties */ });
  