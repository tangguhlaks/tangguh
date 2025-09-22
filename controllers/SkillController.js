const db = require('../config/db');

/* SKILL */
exports.skillPage = async (req, res) => {
  try {
    res.render("pages/admin/skill", { 
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

/* Get All Skill (JSON untuk DataTable) */
exports.getSkills = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM skills ORDER BY id DESC");
    res.json({data:rows});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Add Skill */
exports.addSkill = async (req, res) => {
  try {
    const { name, level, description } = req.body;
    await db.query("INSERT INTO skills (name, level, description) VALUES (?, ?, ?)", [name, level, description]);
    res.json({ success: true, message: "Skill berhasil ditambahkan!" });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Update Skill */
exports.updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, description } = req.body;
    await db.query("UPDATE skills SET name=?, level=?, description=? WHERE id=?", [name, level, description, id]);
    res.json({ success: true, message: "Skill berhasil diperbaharui!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* Delete Skill */
exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM skills WHERE id=?", [id]);
    res.json({ success: true, message: "Skill berhasil dihapus!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

/* SKILL */