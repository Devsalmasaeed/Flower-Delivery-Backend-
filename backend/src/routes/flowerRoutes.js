
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { getFlowers, addFlower, deleteFlower } = require("../controllers/flowerControllers");


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValid = allowedTypes.test(file.mimetype.toLowerCase());
    cb(null, isValid);
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, 
});


router.get("/", getFlowers);
router.post("/", upload.single("image"), addFlower);
router.delete("/:id", deleteFlower);

module.exports = router;
