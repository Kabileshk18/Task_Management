# Task_Management

📌 Project Overview

The Task Management System is a backend application built using Node.js, Express, and MySQL with Sequelize ORM. It provides authentication, authorization, and task management features with role-based access control (Admin & User).


🚀 Features & Functionalities

◻️ User Authentication & Authorization

    ◾JWT-based authentication
    ◾Role-based access control (RBAC) (Admin, User)
    ◾Each API is protected by token verification

◻️ User Roles & Permissions

◾Admin:

    ◾Can assign tasks to users
    ◾Can delete any task
    ◾Can retrieve all tasks

◾User:

    ◾Can create their own tasks
    ◾Can retrieve only their assigned tasks

◻️ Database Management with Sequelize

    ◾Sequelize ORM with MySQL
    ◾Associations (One-to-Many & Many-to-One relationships)

◻️ API Protection & Middleware

    ◾JWT for token verification
    ◾Authorization middleware for role-based restrictions

◻️ Security Enhancements

    ◾Password hashing with bcrypt
    ◾Environment variables for sensitive credentials

📂 Project Structure

Employee_management/
├── src/
|   ├── config/
|       ├── db.js               # Database configuration
|
├── controllers/
|   ├── authControllers.js      # Auth-related operations
|   ├── taskController.js       # Task-related operations
|
├── middleware/
|   ├── authMiddleware.js       # Token verification and Role based access middleware
|
├── models/
|   ├── ActivityLog.js          # Model for ActivityLog
|   ├── Task.js                 # Model for Task
|   ├── User.js                 # Model for User
|
├── routes/
|   ├── authRoutes.js           # Routes for authController
|   ├── taskRoutes.js           # Routes for taskController
|
├── app.js                      # Functional point
├── .env                        # Environment variables
├── package.json                # Dependencies
├── README.md                   # Project Documentation
└── server.js                   # Entry point


🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Kabileshk18/Task_Management.git

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=task_management_db
JWT_SECRET=your_secret_key

4️⃣ Start the Application

npm start

For development with nodemon:

nodemon start

🔒 Authentication & Authorization

    ◾JWT Authentication: Users must log in to receive a token.
    ◾Role-Based Access Control (RBAC):
        ◾Admin can manage all tasks.
        ◾Users can only manage their own tasks.
    ◾Middleware Protection: All APIs are secured with token verification and authorization.

🛠️ Technologies Used

    ◾Backend: Node.js, Express.js
    ◾Database: MySQL with Sequelize ORM
    ◾Authentication: JWT

👨‍💻 Author

Developed by Kabilesh K | GitHub: @Kabileshk18