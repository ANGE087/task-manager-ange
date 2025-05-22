# Task Manager Application

A full-stack task management application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js).

## Features

- User authentication (Register/Login)
- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Secure API with JWT authentication
- MongoDB Atlas cloud database
- Responsive design

## Deployment

The application is deployed on Render:
- Frontend: https://task-manager-frontend.onrender.com
- Backend: https://task-manager-backend.onrender.com

## Local Development

### Prerequisites

- Node.js
- MongoDB Atlas account
- Angular CLI

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a .env file based on .env.example and add your MongoDB Atlas URI and JWT secret.

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open http://localhost:4200 in your browser

## Deployment Instructions

### MongoDB Atlas Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Create a database user
4. Get your connection string
5. Add the connection string to your environment variables

### Render Deployment

1. Fork this repository
2. Connect your Render account to GitHub
3. Create a new Web Service for the backend
4. Create a new Static Site for the frontend
5. Add environment variables in Render dashboard
6. Deploy both services

## Environment Variables

Backend:
- `MONGO_URI`: MongoDB Atlas connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
