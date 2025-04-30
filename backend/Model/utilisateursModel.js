const pool = require("../Config/db");

exports.ajouterUtilisateur = async (id,nom,email,motDePasse,date_naissance,lieu_naissance) => {
    const result = await pool.query(
        "INSERT INTO public.utilisateurs (id,email,password) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
        [id,nom,email,motDePasse,date_naissance,lieu_naissance]
    );
    return result.rows[0];  
};