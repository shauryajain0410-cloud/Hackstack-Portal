const express = require("express");
const usersCtrl = require("../controllers/userController");
// Import your authentication middleware (adjust the destructuring if your middleware exports a differently named function like 'protect')
const { auth } = require("../middleware/authMiddleware"); 

const router = express.Router();

// Lock down the GET routes with auth middleware
router.get("/", auth, usersCtrl.listUsers);
router.get("/:id", auth, usersCtrl.getUser);

// Removed POST, PATCH, and DELETE entirely to prevent unauthorized data mutation

module.exports = router;

