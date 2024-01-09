const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/todoDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Todo Model Schema
const Todo = mongoose.model('Todo', {
  id: String,
  task: String,
  dueDate: String,
  completed: Boolean,
  status: String,
});

// Your Express routes will go here
// Example: app.get('/todos', async (req, res) => { /* Logic to fetch todos from MongoDB */ });

// Start Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


// server.js

// ... (previous code)

// Todo GET Route
app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.find(); // Retrieve all todos from MongoDB
      res.json(todos); // Send todos as a JSON response
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  // Todo POST Route
  app.post('/todos', async (req, res) => {
    try {
      // Logic for creating a new todo
    } catch (err) {
      // Error handling
    }
  });
  
  // Todo PUT Route
  app.put('/todos/:id', async (req, res) => {
    try {
      // Logic for updating a todo
    } catch (err) {
      // Error handling
    }
  });
  
  // Todo DELETE Route
  app.delete('/todos/:id', async (req, res) => {
    try {
      // Logic for deleting a todo
    } catch (err) {
      // Error handling
    }
  });
  
  // ... (rest of your code)
  