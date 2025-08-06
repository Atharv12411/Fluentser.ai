// Entry point for the backend
const express = require("express");
const cors = require("cors");
const apiroutes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiroutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

