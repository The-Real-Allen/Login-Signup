# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Login and Signup Page 

This project is a user authentication system that features a login and signup page. It leverages React for the frontend, Express.js for the backend, Axios for handling HTTP requests, and includes a YAML configuration file for backend connectivity.

# Features

User registration (signup)

User login

Integration with a backend server

Configuration via YAML file

# Tech Stack

Frontend: React

Backend: Express.js

HTTP Client: Axios

Configuration: YAML

# Installation

Prerequisites

Node.js installed on your system

Steps

Clone the repository:

git clone https://github.com/The-Real-Allen/Login-Signup.git

Navigate to the project directory:

cd Login-Signup

Install dependencies:

npm install

Install additional frontend dependencies:

npm install react-router-dom framer-motion lucide-react

Configure the YAML file:

Edit the config.yml file to provide the necessary backend details (e.g., API endpoints).

Start the project:

Start the backend server:

npm run server

Start the frontend:

npm start

# Usage

Open your browser and navigate to http://localhost:3000.

Use the signup page to create a new user account.

Login using your credentials on the login page.

 # File Structure

client/

Contains all the React frontend code.

server/

Contains the Express.js backend code.

config.yml

Stores backend configuration.

# Dependencies

React: For building the user interface

React DOM: For managing DOM interactions in React

React Router DOM: For routing in React

Framer Motion: For animations

Lucide React: For icons

Express.js: For backend server logic

Axios: For handling HTTP requests

YAML: For configuration management

dotenv: For managing environment variables

cors: For enabling cross-origin resource sharing

ws: For WebSocket communication

# Contribution

Contributions are welcome! Please fork the repository and create a pull request for any changes.

# License

This project is licensed under the MIT License.

