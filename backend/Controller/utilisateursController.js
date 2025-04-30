const authModel = require("../Model/utilisateursModel.js");


exports.ajouterUtilisateur = [
  async (req, res) => {
  
    const {Nom,Prenom,Email,CIN,Date_Naissance} = req.body;
  
  
    try {       
        
        const utilisateur = await authModel.ajouterUtilisateurModel(Nom,Prenom,Email,CIN,Date_Naissance);
        res.status(201).json({ message: "Ajout réussi ✅", utilisateur: utilisateur });
  
    } catch (error) {
        console.error(error); 
        if (error.code === "23505") {  // 23505 = Violation d'unicité d'email
            return res.status(400).json({ message: "Cet email est déjà utilisé ❌" });
        }
  
        res.status(500).json({ message: "Erreur serveur ❌" });
    }
  }
  ];
  

exports.DeleteProfil = [
    async (req, res) => {
    
    try{
        const {id} = req.body;
        idvalide = parseInt(id);
        const test = await authModel.supprimerUtilisateur(idvalide); 

        if (test) {  
            return res.status(200).json({ 
                message: "Utilisateur supprimé avec succès ✅", 
                utilisateur: test 
            });
        } else { 
            return res.status(404).json({ message: "Utilisateur non trouvé avec cet ID ❌" });
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur ❌" });
    }
    
    
}
];



exports.modifyProdil = [
    async (req, res) => {
    const {Nom,Prenom,Email,CIN,Date_Naissance,id} = req.body;
    
    try{
        idvalide = parseInt(id);
        const person = await authModel.modify(Nom,Prenom,Email,CIN,Date_Naissance,idvalide);

        if (person) {
            return res.status(200).json({
                message: "Modification validée ✅"
            });
        } else {
            return res.status(404).json({ message: "Utilisateur non trouvé avec cet ID ❌" });
        }
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur ❌" });
    }   

}
];


exports.GetProfil = [
    async (req, res) => {
     try{
        const { id } = req.body;
        idvalide = parseInt(id);
         const person = await authModel.trouverUtilisateur(idvalide);
         if (person) {
             return res.json(person);
         } else {
             return res.status(404).json({ message: "Utilisateur non trouvé avec cet ID ❌" });
         }
     } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Erreur serveur ❌" });
     }
     
     } 
];