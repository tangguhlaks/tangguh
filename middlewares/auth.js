exports.isAdminLoggedIn = (req, res, next) => {
  if (req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/login-admin");
  }
};

exports.isAdminNotLoggedIn = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    next();
  } else {
    res.redirect("/configuration");
  }
};
