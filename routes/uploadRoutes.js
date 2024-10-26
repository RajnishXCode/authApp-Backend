// routes/uploadRoutes.js
// const express = require("express");
// const router = express.Router();

// router.post("/upload", upload.single("file"), uploadController.uploadFile);

// module.exports = router;


const route = require("express").Router();
const uploadController = require("../controllers/uploadController");
const upload = require("../middlewares/uploadMiddleWare");


route.post('/upload/image',upload.single("file"), uploadController.uploadImage);


module.exports = route;