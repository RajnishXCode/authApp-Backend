// controllers/uploadController.js

// exports.uploadFile = (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded." });
//   }
//   res.status(200).json({
//     message: "File uploaded successfully",
//     filePath: `/uploads/${req.file.filename}`,
//   });
// };

module.exports = {
  async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded." });
      }
  
      // Read the file and convert to Base64
      const fileContent = req.file.buffer.toString("base64");
      const base64String = `data:${req.file.mimetype};base64,${fileContent}`;
  
      res.status(200).json({
        message: "File processed successfully",
        base64: base64String.slice(0,20),
      });
    } catch (error) {
      res.json({
        error
      })
    }
  },
};
