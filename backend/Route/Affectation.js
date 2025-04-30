const express = require("express");
const router = express.Router();
const utilisateur = require("../Controller/AffectationController.js");

router.post("/Affectation",utilisateur.Affectation);

router.get("/getSkillUser",utilisateur.GetSkillUser);

module.exports = router;