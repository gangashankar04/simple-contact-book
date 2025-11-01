# Simple Contact Book

This is a simple contact book web application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js). The application allows users to manage their contacts by adding, viewing, editing, and deleting them.

## Features

- Add new contacts
- View a list of contacts
- Edit existing contacts
- Delete contacts
- Responsive design

## Technologies Used

- **Frontend**: Angular
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd simple-contact-book
   ```

2. Install backend dependencies:

   ```
   cd server
   npm install
   ```

3. Install frontend dependencies:

   ```
   cd client
   npm install
   ```

### Configuration

1. Create a `.env` file in the `server` directory based on the `.env.example` template. Update the database connection string and any other necessary environment variables.

2. Ensure MongoDB is running.

### Running the Application

1. Start the backend server:

   ```
   cd server
   npm start
   ```

   The backend will run on `http://localhost:5000`.

2. Start the frontend application:

   ```
   cd client
   ng serve
   ```

   The frontend will run on `http://localhost:4200`.

## API Endpoints

- `GET /api/contacts`: Retrieve all contacts
- `POST /api/contacts`: Create a new contact
- `PUT /api/contacts/:id`: Update an existing contact
- `DELETE /api/contacts/:id`: Delete a contact

## License

This project is licensed under the MIT License.