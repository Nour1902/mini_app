const pool = require("../Config/db");

exports.ajouterUtilisateurModel = async (Nom,Prenom,Email,CIN,Date_Naissance) => {
    const result = await pool.query(
        "INSERT INTO public.Personne (Nom,Prenom,Email,CIN,Date_Naissance) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [Nom,Prenom,Email,CIN,Date_Naissance]
    );
    return result.rows[0];  
};

exports.supprimerUtilisateur = async (id) => {

    const result = await pool.query(
        "DELETE FROM public.Personne WHERE idp = $1 RETURNING *",
        [id]
    );

    return result.rows[0];  
};



exports.modify = async (Nom,Prenom,Email,CIN,Date_Naissance,idvalide) => {
    const result = await pool.query(
        "UPDATE public.Personne SET Nom=$1, Prenom=$2, Email=$3, CIN=$4, Date_Naissance=$5 WHERE idp=$6 RETURNING *",
        [Nom, Prenom, Email, CIN, Date_Naissance, idvalide]
      );      

    return result.rows.length > 0 ? result.rows[0] : null;
};

exports.trouverUtilisateur = async (id) => {
    const result = await pool.query(
        "SELECT * FROM public.Personne WHERE idp = $1 ",
        [id]
    );
    return result.rows[0];  
};