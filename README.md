# Microservices ExpressJS MongoDB

This repository contains a sample project consisting of three microservices developed using Express.js and MongoDB. The microservices are responsible for handling authentication, product management, and order management functionalities. The project follows a microservices architecture, allowing each service to be developed, deployed, and scaled independently.

## Features

- **Auth Service**: Manages user authentication and authorization. Handles user registration, login, and token generation for secure access to protected routes.
- **Product Service**: Provides CRUD operations for managing products. Allows users to create, read, update, and delete products. Includes features such as product search and filtering.
- **Order Service**: Handles order management functionalities. Allows users to create new orders, view order details, and update order status. Supports features like order tracking and history.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens) for authentication

## Getting Started

To get started with the project, follow the steps below:

1. Clone the repository to your local machine:

   ```bash
   git clone git@github.com:hamzamaach/microservices-ExpressJS-MongoDB.git

2. Install the dependencies for each microservice:

     ```bash
     cd auth-service
     npm install

     cd ../product-service
     npm install

     cd ../order-service
     npm install 
     ```

3. Set up the MongoDB database. Update the MongoDB connection strings in the respective microservice configurations (config.js or .env files).

4. Start each microservice:

     ```bash
     # In separate terminal windows
     cd auth-service
     npm start

     cd ../product-service
     npm start

     cd ../order-service
     npm start
