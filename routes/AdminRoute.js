const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/AdminController");
const SkillController = require("../controllers/SkillController");
const ExperienceController = require("../controllers/ExperienceController");
const EducationController = require("../controllers/EducationController");
const { isAdminLoggedIn,isAdminNotLoggedIn } = require("../middlewares/auth");

router.get("/login-admin",isAdminNotLoggedIn ,AdminController.loginPage);
router.post("/login-admin",isAdminNotLoggedIn,AdminController.loginProcess);
router.get("/logout", isAdminLoggedIn,AdminController.logout);

router.get("/configuration", isAdminLoggedIn ,AdminController.configurationPage);
router.post("/configuration/save", isAdminLoggedIn,AdminController.saveConfig);

router.get("/skill", isAdminLoggedIn ,SkillController.skillPage);
router.get("/skill/list", isAdminLoggedIn, SkillController.getSkills);
router.post("/skill", isAdminLoggedIn, SkillController.addSkill);
router.put("/skill/:id", isAdminLoggedIn, SkillController.updateSkill);
router.delete("/skill/:id", isAdminLoggedIn, SkillController.deleteSkill);

router.get("/experience", isAdminLoggedIn, ExperienceController.experiencePage);
router.get("/experience/list", isAdminLoggedIn, ExperienceController.getExperiences);
router.post("/experience", isAdminLoggedIn, ExperienceController.addExperience);
router.put("/experience/:id", isAdminLoggedIn, ExperienceController.updateExperience);
router.delete("/experience/:id", isAdminLoggedIn, ExperienceController.deleteExperience);

router.get("/education", isAdminLoggedIn, EducationController.educationPage);
router.get("/education/list", isAdminLoggedIn, EducationController.getEducations);
router.post("/education", isAdminLoggedIn, EducationController.addEducation);
router.put("/education/:id", isAdminLoggedIn, EducationController.updateEducation);
router.delete("/education/:id", isAdminLoggedIn, EducationController.deleteEducation);

module.exports = router;
