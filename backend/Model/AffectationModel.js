const pool = require("../Config/db");

exports.Affectaion = async (idpfinal,idcfinal) => {
    const result = await pool.query(
        "INSERT INTO public.Personne_Competence (idp,idc) VALUES ($1,$2) RETURNING *",
        [idpfinal,idcfinal]
    );
    return result.rows[0];  
};

exports.GetSkillUserModel = async (id) => {
    const result = await pool.query(
        "SELECT idc FROM public.Personne_Competence WHERE idp = $1 ",
        [id]
    );
    return result.rows; 
};