const authModel = require("../Model/utilisateursModel.js");


exports.FuncInscription = [
  async (req, res) => {
  
    const { Nom, Prenom, Email, CIN, Date_Naissance} = req.body;
  
  
    try {       
        
        const utilisateur = await authModel.ajouterUtilisateur(id,nom,email,motDePasseSecurise,date_naissance,lieu_naissance);
        res.status(201).json({ message: "Inscription réussie ✅", utilisateur: Nutilisateur });
  
    } catch (error) {
        console.error(error); 
        if (error.code === "23505") {  // 23505 = Violation d'unicité d'email
            return res.status(400).json({ message: "Cet email est déjà utilisé ❌" });
        }
  
        res.status(500).json({ message: "Erreur serveur ❌" });
    }
  }
  ];

