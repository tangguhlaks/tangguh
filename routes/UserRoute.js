const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

// Route user
router.get("/", UserController.homePage);
router.get("/about", UserController.aboutPage);
router.get("/portfolio", UserController.portfolioPage);
router.get("/contact", UserController.contactPage);
router.get("/blog", UserController.blogPage);

module.exports = router;
