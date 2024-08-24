
# Alma YouTube Subscriber API

## Overview

Alma YouTube Subscriber API is a Node.js application that provides endpoints to manage and retrieve subscriber information using MongoDB Atlas as the database. This application demonstrates how to build a RESTful API with Node.js and MongoDB, focusing on CRUD operations and database management.

## Features

- **Database Integration**: Uses MongoDB Atlas for data storage.
- **API Endpoints**:
  - **GET** `/subscribers`: Retrieve a list of all subscribers.
  - **GET** `/subscribers/names`: Retrieve a list of subscribers with only their names and subscribed channels.
  - **GET** `/subscribers/:id`: Retrieve a subscriber by their ID.

## Project Structure

```
alma-youtube-tanmay/
├── src/
│   ├── index.js             # Server entry point and database connection
│   ├── app.js               # Express routes and request handling
│   ├── createDatabase.js    # Script to populate the database
│   └── models/
│       └── subscribers.js   # Mongoose schema for subscribers
├── .env                     # Environment variables
├── .gitignore               # Files and directories to ignore in Git
└── package.json             # Project metadata and dependencies
```

## Setup and Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/alma-youtube-tanmay.git
   cd alma-youtube-tanmay
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory with the following content:

   ```
   MONGO_URI=mongodb+srv://yourusername:yourpassword@yourcluster.mongodb.net/?retryWrites=true&w=majority
   PORT=3000
   ```

4. **Populate the Database (Optional)**:

   Ensure you have MongoDB installed locally if you want to use `createDatabase.js` for local testing.

   ```bash
   node src/createDatabase.js
   ```

5. **Start the Server**:

   ```bash
   npm start
   ```

   This will start the server and populate the database if needed.

## API Endpoints

- **GET** `/subscribers`

  Retrieves an array of all subscribers.

  **Response**: 
  ```json
  [
    {
      "id": "subscriberId",
      "name": "Subscriber Name",
      "subscribedChannel": "Channel Name"
    }
  ]
  ```

- **GET** `/subscribers/names`

  Retrieves an array of subscribers with only `name` and `subscribedChannel`.

  **Response**: 
  ```json
  [
    {
      "name": "Subscriber Name",
      "subscribedChannel": "Channel Name"
    }
  ]
  ```

- **GET** `/subscribers/:id`

  Retrieves a subscriber by their ID.

  **Response**:
  ```json
  {
    "id": "subscriberId",
    "name": "Subscriber Name",
    "subscribedChannel": "Channel Name"
  }
  ```

  **Error Response** (if subscriber not found):
  ```json
  {
    "message": "Subscriber not found"
  }
  ```

## Notes

- The `src/app.js` file is used exclusively for handling routes and requests. The server setup and database connection are handled in `src/index.js`.
- Ensure MongoDB Atlas connection URI is correctly set in the `.env` file.

## License

This project is licensed under the MIT License.

---
