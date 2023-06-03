require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 4002;
const mongoose = require("mongoose");
const Utilisateur = require("./Utilisateur");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
mongoose.set('strictQuery', true);
mongoose.connect(
    "mongodb://127.0.0.1:27017/auth-service",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
app.use(express.json());

app.post("/auth/register", async (req, res) => {
        let {nom, email, mot_passe} = req.body;

        const userExists = await Utilisateur.findOne({
            email
        });
        if (userExists) {
            return res.json({
                message: "Cet utilisateur existe deja"
            });
        } else {
            bcrypt.hash(mot_passe, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err,
                    });
                } else {
                    mot_passe = hash;
                    const newUtilisateur = new Utilisateur({
                        nom,
                        email,
                        mot_passe
                    });
                    newUtilisateur.save()
                        .then(user =>
                            res.status(201).json(user))
                        .catch(error =>
                            res.status(400).json({error}));
                }
            });
        }
    }
);

app.post("/auth/login", async (req, res) => {
        const {email, mot_passe} = req.body;
        const utilisateur = await Utilisateur.findOne({
            email
        });
        if (!utilisateur) {
            return res.json({
                message: "Utilisateur introuvable"
            });
        } else {
            bcrypt.compare(mot_passe, utilisateur.mot_passe).then(resultat => {
                if (!resultat) {
                    return res.json({
                        message: "Mot de passe incorrect"
                    });
                } else {
                    const payload = {
                        email,
                        nom: utilisateur.nom
                    };
                    jwt.sign(payload, "secret", (err, token) => {
                        if (err) console.log(err);
                        else return res.json({
                            token: token
                        });
                    });
                }
            });
        }
    }
);

app.listen(PORT, () => {
    console.log(`Auth-Service at ${PORT}`);
});