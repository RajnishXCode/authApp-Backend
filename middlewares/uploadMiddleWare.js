// middlewares/uploadMiddleware.js

const multer = require("multer");
// const path = require("path");
// const fs = require("fs");

// const baseDir = path.join(__dirname, "../uploads");

// Ensure the uploads directory exists
// if (!fs.existsSync(baseDir)) {
//   fs.mkdirSync(baseDir);
// }

// Set up multer for file upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, baseDir);
//   },
//   filename: (req, file, cb) => {
//     // Use the original name with a timestamp to avoid overwriting
//     const uniqueName = Date.now() + "-" + file.originalname;
//     cb(null, uniqueName);
//   },
// });
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
