const db = require('../config/db');

/* EDUCATION PAGE */
exports.educationPage = async (req, res) => {
  try {
    res.render("pages/admin/education", { 
      currentPath: req.path, 
      layout: "layout-admin",
      success_msg: req.flash("success_msg"),
      error_msg: req.flash("error_msg")
    });
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "Gagal membuka halaman Education!");
    res.redirect("/");
  }
};

/* Get All Education (JSON untuk DataTable) */
exports.getEducations = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        id,
        school_name,
        DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date,
        DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date,
        description
      FROM educations
      ORDER BY start_date DESC;
    `);
    res.json({ data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Add Education */
exports.addEducation = async (req, res) => {
  try {
    const { school_name, start_date, end_date, description } = req.body;
    await db.query(
      "INSERT INTO educations (school_name, start_date, end_date, description) VALUES (?, ?, ?, ?)",
      [school_name, start_date, end_date || null, description]
    );
    res.json({ success: true, message: "Education berhasil ditambahkan!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Update Education */
exports.updateEducation = async (req, res) => {
  try {
    const { id } = req.params;
    const { school_name, start_date, end_date, description } = req.body;
    await db.query(
      "UPDATE educations SET school_name=?, start_date=?, end_date=?, description=? WHERE id=?",
      [school_name, start_date, end_date || null, description, id]
    );
    res.json({ success: true, message: "Education berhasil diperbaharui!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Delete Education */
exports.deleteEducation = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM educations WHERE id=?", [id]);
    res.json({ success: true, message: "Education berhasil dihapus!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
