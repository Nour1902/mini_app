const express = require("express");
const router = express.Router();
const utilisateur = require("../Controller/utilisateursController.js");

router.post("/AjoutUser",utilisateur.ajouterUtilisateur);

router.delete("/deleteProfil",utilisateur.DeleteProfil);

// PUT : que pour lutilisateur
router.put("/modifyProdil",utilisateur.modifyProdil);

router.get("/getProfile",utilisateur.GetProfil);

module.exports = router;