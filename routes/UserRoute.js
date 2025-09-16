const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/home",{ currentPath: req.path });
});

router.get("/about", (req, res) => {
  res.render("pages/about",{ currentPath: req.path });
});

router.get("/portfolio", (req, res) => {
  res.render("pages/portfolio",{ currentPath: req.path });
});

router.get("/contact", (req, res) => {
  res.render("pages/contact",{ currentPath: req.path });
});

router.get("/blog", (req, res) => {
  res.render("pages/blog",{ currentPath: req.path });
});

module.exports = router;
