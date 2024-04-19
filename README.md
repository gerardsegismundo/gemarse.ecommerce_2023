# Gemarse Ecommerce

Gemarse is a full-stack ecommerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It enables users to browse, search, and purchase products online securely.

[Live Version](https://gemarseecommerce2023-production.up.railway.app/)

# Screenshots

![image](https://github.com/gerardsegismundo/gemarse.ecommerce_2023/assets/30321279/6310fd25-26fa-45a2-a36a-b49168eafd1b)
![image](https://github.com/gerardsegismundo/gemarse.ecommerce_2023/assets/30321279/1377d9bd-b323-4e17-9823-d41cd2ab3780)
![image](https://github.com/gerardsegismundo/gemarse.ecommerce_2023/assets/30321279/f53d65a0-e1e3-4a1f-9ec4-03b9e8a26924)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Deployment](#deployment)

## Features

- User JWT authentication and authorization
- Product catalog with categories and search functionality
- Shopping cart functionality
- Secure checkout process with Stripe integration

## Technologies Used

- MongoDB: NoSQL database for storing product, user, and order data
- Express.js: Backend web framework for handling HTTP requests and routing
- React.js: Frontend JavaScript library for building user interfaces
- Node.js: JavaScript runtime environment for executing server-side code
- Stripe: Payment processing platform for handling transactions securely

## Getting Started

### Prerequisites

- Node.js and npm installed on your local machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gerardsegismundo/gemarse.ecommerce_2023
   ```

2. Navigate to the project directory:

   ```bash
   cd gemarse
   ```

3. Install server dependencies:

   ```bash
   npm install
   ```

4. Navigate to the client directory:

   ```bash
   cd client
   ```

5. Install client dependencies:

   ```bash
   npm install
   ```

6. Set up environment variables:

   - Create a `.env` file in the root directory with the following environment variables:

     ```
      MONGO_URI = your_mongo_db_uri
      STRIPE_KEY = your_stripe_key
      CLIENT_URL = http://localhost:3000 or your client_url

      JWT_SECRET_REFRESH = your_refresh_token
      JWT_SECRET_ACCESS = your_secret_access

      JWT_EXPIRE_REFRESH = 30 or ??
      JWT_EXPIRE_ACCESS = 7 or ??

      JWT_EXPIRE_COOKIE = 7 or ??
     ```

### Usage

1. Start the server and client on dev mode:

   ```bash
   npm run dev
   ```

2. Access the application in your web browser:

   ```
   http://localhost:3000
   ```

### Deployment

You can access the deployed application using the following links:

- [Render Deployment](https://gemarse.onrender.com/)
