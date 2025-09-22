const db = require('../config/db');
const multer = require("multer");
const path = require("path");


/* LOGIN & LOGOUT */
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

/* LOGIN & LOGOUT */

/* GLOBAL CONFIGURATION */
exports.configurationPage = async (req, res) => {
  try {
    // Ambil semua konfigurasi
    const [rows] = await db.execute("SELECT * FROM global_configuration");

    // Ubah array menjadi object { field_name: field_value } supaya mudah diakses di EJS
    const config = {};
    rows.forEach(row => {
      config[row.field_name] = row.field_value;
    });

    res.render("pages/admin/global-configuration", { 
      currentPath: req.path, 
      layout: "layout-admin",
      success_msg: req.flash("success_msg"),
      error_msg: req.flash("error_msg"),
      config
    });
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "Gagal mengambil konfigurasi!");
    res.redirect("/");
  }
};


function detectSection(field) {
  if (field.startsWith('about')) return 'about';
  if (field.startsWith('portfolio')) return 'portfolio';
  if (field.startsWith('blog')) return 'blog';
  if (['github', 'linkedin', 'instagram', 'whatsapp', 'email'].includes(field) || field.startsWith('contact')) return 'contact';
  return 'home';
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname === "profile-photo") {
      cb(null, "public/images");
    } else if (file.fieldname === "cv") {
      cb(null, "public/files");
    } else {
      cb(null, "public/uploads");
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === "profile-photo") {
      cb(null, "profile.png"); // selalu nama ini
    } else if (file.fieldname === "cv") {
      cb(null, "cv.pdf"); // selalu nama ini
    } else {
      cb(null, file.originalname); 
    }
  }
});

const upload = multer({ storage: storage });
exports.saveConfig = [
  upload.fields([
    { name: "profile-photo", maxCount: 1 },
    { name: "cv", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const data = req.body;
      const photoUploaded = req.files && req.files["profile-photo"];
      const cvUploaded = req.files && req.files.cv;

      // update paths jika ada
      if (photoUploaded) {
        data["profile-photo"] = "/images/" + req.files["profile-photo"][0].filename;
      }
      if (cvUploaded) {
        data.cv = "/files/" + req.files.cv[0].filename;
      }

      // truncate jika salah satu file baru di-upload
      if (photoUploaded && cvUploaded) {
        await db.execute("TRUNCATE TABLE global_configuration");
      } else {
        if (photoUploaded) {
            await db.execute("DELETE FROM global_configuration WHERE field_name NOT IN ('cv')"); 
        }else if(cvUploaded) {
            await db.execute("DELETE FROM global_configuration WHERE field_name NOT IN ('profile-photo')"); 
        }else{
            await db.execute("DELETE FROM global_configuration WHERE field_name NOT IN ('profile-photo', 'cv')"); 
        }
      }


      for (const field in data) {
        const value = data[field];
        const section = detectSection(field);

        await db.execute(
          `INSERT INTO global_configuration (section, field_name, field_value)
           VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE field_value = VALUES(field_value)`,
          [section, field, value]
        );
      }

      req.flash("success_msg", "Configuration berhasil disimpan!");
      res.redirect("/configuration");
    } catch (err) {
      console.error(err);
      req.flash("error_msg", "Gagal menyimpan konfigurasi!");
      res.redirect("/configuration");
    }
  }
];

/* GLOBAL CONFIGURATION */