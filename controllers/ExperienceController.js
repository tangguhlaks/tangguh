const db = require('../config/db');

/* EXPERIENCE PAGE */
exports.experiencePage = async (req, res) => {
  try {
    res.render("pages/admin/experience", { 
      currentPath: req.path, 
      layout: "layout-admin",
      success_msg: req.flash("success_msg"),
      error_msg: req.flash("error_msg")
    });
  } catch (err) {
    console.error(err);
    req.flash("error_msg", "Gagal mengambil data!");
    res.redirect("/");
  }
};

/* Get All Experience (JSON untuk DataTable) */
exports.getExperiences = async (req, res) => {
  try {
    const [rows] = await db.query(`SELECT 
                                        id,
                                        name,
                                        company_name,
                                        DATE_FORMAT(start_date, '%Y-%m-%d') AS start_date,
                                        DATE_FORMAT(end_date, '%Y-%m-%d') AS end_date,
                                        description
                                    FROM experiences
                                    ORDER BY start_date DESC;`);
    res.json({ data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Add Experience */
exports.addExperience = async (req, res) => {
  try {
    const { name, company_name, start_date, end_date, description } = req.body;
    await db.query(
      "INSERT INTO experiences (name, company_name, start_date, end_date, description) VALUES (?, ?, ?, ?, ?)",
      [name, company_name, start_date, end_date || null, description]
    );
    res.json({ success: true, message: "Experience berhasil ditambahkan!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Update Experience */
exports.updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company_name, start_date, end_date, description } = req.body;
    await db.query(
      "UPDATE experiences SET name= ?, company_name=?, start_date=?, end_date=?, description=? WHERE id=?",
      [name, company_name, start_date, end_date || null, description, id]
    );
    res.json({ success: true, message: "Experience berhasil diperbaharui!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Delete Experience */
exports.deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM experiences WHERE id=?", [id]);
    res.json({ success: true, message: "Experience berhasil dihapus!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
