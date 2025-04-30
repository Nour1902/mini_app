const authModel = require("../Model/utilisateursModel.js");


exports.ajouterUtilisateur = [
  async (req, res) => {
  
    const {Nom,Prenom,Email,CIN,Date_Naissance} = req.body;
  
  
    try {       
        
        const utilisateur = await authModel.ajouterUtilisateur(Nom,Prenom,Email,CIN,Date_Naissance);
        res.status(201).json({ message: "Inscription réussie ✅", utilisateur: utilisateur });
  
    } catch (error) {
        console.error(error); 
        if (error.code === "23505") {  // 23505 = Violation d'unicité d'email
            return res.status(400).json({ message: "Cet email est déjà utilisé ❌" });
        }
  
        res.status(500).json({ message: "Erreur serveur ❌" });
    }
  }
  ];

