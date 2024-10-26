const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadController = require("./controllers/uploadController");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Set up multer for file upload with memory storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// Define the route to handle file uploads
// app.post("/upload", upload.single("file"), uploadController.uploadFile);
app.get("/", (req, res) => {
  res.send("Welcome to the homepage of authApp Server");
});
app.use("/api/v1", routes.uploadRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
