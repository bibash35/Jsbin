const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { ConnectToDb } = require("./db/Connection");
const authRoutes = require("./routes/user");

const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Connect to the database
ConnectToDb();

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

app.use(express.json()); // global middleware,  sets up req.body

// Define routes
app.use("/api/auth", authRoutes);

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
