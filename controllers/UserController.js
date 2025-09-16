exports.homePage = (req, res) => {
  res.render("pages/home", { currentPath: req.path });
};

exports.aboutPage = (req, res) => {
  res.render("pages/about", { currentPath: req.path });
};

exports.portfolioPage = (req, res) => {
  res.render("pages/portfolio", { currentPath: req.path });
};

exports.contactPage = (req, res) => {
  res.render("pages/contact", { currentPath: req.path });
};

exports.blogPage = (req, res) => {
  res.render("pages/blog", { currentPath: req.path });
};
