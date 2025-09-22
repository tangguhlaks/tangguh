const db = require('../config/db');

exports.homePage = async (req, res) =>  {
    const [rows] = await db.execute("SELECT * FROM global_configuration WHERE section = 'home'");
    const config = {};
    rows.forEach(row => {
      config[row.field_name] = row.field_value;
    });
  res.render("pages/home", { currentPath: req.path, config });
};

exports.aboutPage = async (req, res) => {
    const [rows] = await db.execute("SELECT * FROM global_configuration WHERE section = 'about'");
    const [skills] = await db.execute("SELECT * FROM skills");
    const [experiences] = await db.execute(`SELECT 
                                        id,
                                        name,
                                        company_name,
                                        DATE_FORMAT(start_date, '%Y/%m/%d') AS start_date,
                                        DATE_FORMAT(end_date, '%Y/%m/%d') AS end_date,
                                        description
                                    FROM experiences
                                    ORDER BY start_date DESC;`);
    const [educations] = await db.execute(`SELECT 
                                        id,
                                        school_name,
                                        DATE_FORMAT(start_date, '%Y/%m/%d') AS start_date,
                                        DATE_FORMAT(end_date, '%Y/%m/%d') AS end_date,
                                        description
                                    FROM educations
                                    ORDER BY start_date DESC;`);
    const config = {};
    rows.forEach(row => {
      config[row.field_name] = row.field_value;
    });
  res.render("pages/about", { currentPath: req.path, config, skills, experiences, educations});
};

exports.portfolioPage = async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM global_configuration WHERE section = 'portfolio'");
  const config = {};
  rows.forEach(row => {
    config[row.field_name] = row.field_value;
  });
  res.render("pages/portfolio", { currentPath: req.path, config });
};

exports.contactPage = async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM global_configuration WHERE section = 'contact'");
  const config = {};
  rows.forEach(row => {
    config[row.field_name] = row.field_value;
  });
  res.render("pages/contact", { currentPath: req.path, config });
};

exports.blogPage = async (req, res) => {
  const [rows] = await db.execute("SELECT * FROM global_configuration WHERE section = 'blog'");
  const config = {};
  rows.forEach(row => {
    config[row.field_name] = row.field_value;
  });
  res.render("pages/blog", { currentPath: req.path, config });
};
