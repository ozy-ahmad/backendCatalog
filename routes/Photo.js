const express = require("express");
const router = express.Router();
const photoController = require("../controllers/Photo");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});
router.post("/postPhoto", upload.single("image"), photoController.postPhoto);
router.get("/getPhoto/", photoController.getData);
module.exports = router;
