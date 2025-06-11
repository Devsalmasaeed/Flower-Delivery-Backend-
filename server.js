require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const flowerRoutes = require("./routes/flowerRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Ensure MongoDB URI is present
if (!process.env.MONGODB_URI) {
  console.error("❌ ERROR: MONGODB_URI is undefined! Check your .env file.");
  process.exit(1);
}

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ ERROR: MongoDB Connection Failed:", err.message);
    process.exit(1);
  });

// ✅ CORS Setup (allow both local and deployed frontend)
app.use(cors({
  origin: [
    "http://localhost:3000", // Local frontend
    "https://flower-delivery-backend.onrender.com" // Replace with actual Render frontend URL
  ],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// ✅ Log all requests (debugging)
app.use((req, res, next) => {
  console.log(`📩 ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  next();
});

// ✅ Root route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Flower API!" });
});

// ✅ Flower API Routes
app.use("/api/flowers", flowerRoutes);

// ✅ Handle 404 errors
app.use((req, res) => {
  console.error(`❌ 404 Not Found: ${req.method} ${req.url}`);
  res.status(404).json({ message: "Route not found" });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
