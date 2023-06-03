const mongoose = require("mongoose");
const UtilisateurSchema = mongoose.Schema({
    nom: String,
    email: String,
    mot_passe: String,
    created_at: {
        type: Date,
        default: Date.now(),
    },
});
module.exports = Utilisateur = mongoose.model("utilisateur", UtilisateurSchema);