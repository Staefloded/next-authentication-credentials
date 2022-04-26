const express = require("express");
const { loginUser, getMe, registerUser } = require("../controllers/userController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", protect, getMe);

module.exports = router;
