# Task Manager – Full Stack Web Application

This project is a simple full stack Task Management web application built as part of a Full Stack Development Internship assignment. The application allows users to create, view, update, and delete tasks with persistent data storage.

## Features
- Add new tasks
- View all tasks
- Update task status (Pending / Completed)
- Delete tasks
- Responsive user interface
- RESTful API integration

## Tech Stack

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB

## Project Structure

task-manager/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── controllers/
│   └── taskController.js
├── routes/
│   └── taskRoutes.js
├── models/
│   └── Task.js
├── config/
│   └── db.js
├── server.js
└── .env

## Setup Instructions

1. Install dependencies

npm install

2. Create environment file

Create a `.env` file in the root directory and add the following:

PORT=5000  
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager

3. Run backend server

npx nodemon server.js

The backend server will start on http://localhost:5000

4. Run frontend

Open the following file in a browser or use Live Server:

frontend/index.html

## API Endpoints

POST /api/tasks – Create a new task  
GET /api/tasks – Get all tasks  
PUT /api/tasks/:id – Update a task  
DELETE /api/tasks/:id – Delete a task  

## Future Enhancements
- User authentication
- Task filtering and search
- Deployment to a cloud platform

## Conclusion

This project demonstrates core full stack development concepts including frontend UI development, backend REST API creation, database integration, and CRUD operations.
