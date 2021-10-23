const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

router.get("/", (req, res) => {
  res.json({ name: "file name", type: "file type", size: "file size" });
});

router.post("/", upload.single("upfile"), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({ name: originalname, type: mimetype, size: size });
});

module.exports = router;
