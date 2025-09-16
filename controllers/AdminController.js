exports.loginPage = (req, res) => {
  res.render("pages/admin/login", { currentPath: req.path, layout: false, error: null });
};

exports.loginProcess = (req, res) => {
  const { username, password } = req.body;

  // Contoh validasi sederhana (ganti dengan DB nanti)
  const adminUser = {
    username: "administrator",
    password: "P@ssw0rd"
  };

  if (username === adminUser.username && password === adminUser.password) {
    req.session.isLoggedIn = true;
    req.session.username = username;
    res.redirect("/configuration");
  } else {
    res.render("pages/admin/login", { 
      currentPath: req.path, 
      layout: false, 
      error: "Wrong Username or Password!"
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) console.log(err);
    res.redirect("/login-admin");
  });
};

exports.configurationPage = (req, res) => {
  res.render("pages/admin/global-configuration", { currentPath: req.path, layout: "layout-admin" });
};
