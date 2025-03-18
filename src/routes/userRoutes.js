const express = require("express");
const router = express.Router();
const { signupUser, loginUser, getAllUsers } = require("../controllers/userController");


router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);


module.exports = router;
