const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const { isAdminLoggedIn,isAdminNotLoggedIn } = require("../middlewares/auth");

router.get("/login-admin",isAdminNotLoggedIn ,AdminController.loginPage);
router.post("/login-admin",isAdminNotLoggedIn,AdminController.loginProcess);
router.get("/logout", isAdminLoggedIn,AdminController.logout);
router.get("/configuration", isAdminLoggedIn ,AdminController.configurationPage);

module.exports = router;
