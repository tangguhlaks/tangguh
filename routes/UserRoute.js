const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home",{ currentPath: req.path });
});

router.get("/about", (req, res) => {
  res.render("pages/about",{ currentPath: req.path });
});

module.exports = router;
