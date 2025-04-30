const authModel = require("../Model/AffectationModel.js");


exports.Affectation = [
  async (req, res) => {
  
    const {idp,idc} = req.body;
   
        const idpfinal=parseInt(idp);
        const idcfinal=parseInt(idc);
        const Affectation = await authModel.Affectaion(idpfinal,idcfinal);
        res.status(201).json({ message: "Ajout réussi ✅", Affectation: Affectation });
  
  }
];


exports.GetSkillUser = [
    async (req, res) => {
     try{
        const { id } = req.body;
        idvalide = parseInt(id);
         const SKILLS = await authModel.GetSkillUserModel(id);
         if (SKILLS) {
             return res.json(SKILLS);
         } else {
             return res.status(404).json({ message: "❌" });
         }
     } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Erreur serveur ❌" });
     }
     
     } 
];