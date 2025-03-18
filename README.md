
# 🌸 Flower Delivery Backend

A backend application for managing a flower delivery service, built with Node.js, Express, and MongoDB.

## 🚀 Features

- Manage flower catalog 
- Handle customer orders
- Connect with MongoDB for database operations
- Built-in API routes for managing data
- Environment variable support for secure configurations

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Devsalmasaeed/Flower-Delivery-Backend.git

2. Navigate to the project directory
   ```bash
   cd Flower-Delivery-Backend
3. Install dependencies
   ```bash
    npm install
4. Set up environment variables
   -  Create a .env file in the root directory.
   -  Add the following variables
      
     - **PORT=5000**
     - **MONGO_URI=mongodb+srv://saeedsalmaabdullahi:Salma2025@cluster0.qtvo1.mongodb.net/?retryWrites=true&w=majority**

5. Start the development server
     ```bashm
     npm run dev

## 📚 API Endpoints

- Root Endpoint

GET /
- Response: Welcome message.
- Flower Routes
- GET /flowers
- Fetch all flowers.
- POST /flowers
- Add a new flower.
- PUT /flowers/:id
- Update an existing flower.
- DELETE /flowers/:id
- Delete a flower.

## 🌍 Deployment
- Flower Delivery Backend:[LIVE DEMO](https://flower-delivery-backend.onrender.com/)
- Live API: [Flowers api](http://localhost:5000/api/flowers)
- Live API: [Users api](http://localhost:5000/api/users)


## 📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

## 📧 Contact
- Author: Salma Saeed
- Email: sasaeed092@gmail.com
- GitHub: Devsalmasaeed     


