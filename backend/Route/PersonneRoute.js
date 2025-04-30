const express = require("express");
const router = express.Router();
const utilisateur = require("../Controller/utilisateursController.js");

router.post("/AjoutUser",utilisateur.ajouterUtilisateur);

//router.delete("/deleteProfil",verifyToken,utilisateursController.DeleteProfil);

// PUT : que pour lutilisateur
//router.put("/modifyEmail",verifyToken,utilisateursController.modifyEmail);




module.exports = router;