const express = require("express");
const router = express.Router();
const multer = require("multer");
const blogController = require("../controller/blogController");
const { upload } = require("../middleware/multer");

router.get("/", blogController.getBlogs);
router.post("/", upload.single("image"), blogController.createBlog);

module.exports = router;
