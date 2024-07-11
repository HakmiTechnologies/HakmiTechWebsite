const express = require("express");
const router = express.Router();
const multer = require("multer");
const newsController = require("../controller/newsController");
const { upload } = require("../middleware/multer");

router.get("/", newsController.getNews);
router.post("/", upload.single("image"), newsController.createNews);

module.exports = router;
