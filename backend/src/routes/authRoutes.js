//  importation du module express
import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

//creation d'un objet Router pour gérer les routes de l'application² 
const router = express.Router();

const generateToken = (userId) => {
   return jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: '15d' });
}

/**  
 * Route pour l'inscription d'un nouvel utilisateur
 * Méthode: POST
 * URL: /register
 */

//#region Register
router.post('/register', async (req, res) => {
    // Logique d'inscription ici - fonction appelée lors d'une requête POST à /register
    try {
        const { email, username, password } = req.body;
        // Ici, vous ajouteriez la logique pour enregistrer l'utilisateur dans la base de données
        if (!email || !username || !password) {
            return res.status(400).json({ message: 'Tous les champs sont requis' });
        }
        if (password.length < 6) {
            return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 6 caractères' });
        }
        if (username.length < 3) {
            return res.status(400).json({ message: "Le nom d'utilisateur doit contenir au moins 3 caractères" });
        }

        // verification si l'utilisateur existe déjà avec le même email ou username
        const existingEmail = await User.findOne({ email});
        if (existingEmail) {
            return  res.status(400).json({ message: 'Email déjà utilisé' });
        }
        const existingUsername = await User.findOne({ username});
        if (existingUsername) {
            return  res.status(400).json({ message: "Nom d'utilisateur déjà utilisé" });
        }

        // creation avatar aléatoire avec l'API DiceBear
        const profileImage = `https://api.dicebear.com/9.x/pixel-art/svg?seed=${username}`;

        // création d'un nouvel utilisateur
        const user = new User({
            email,
            username,
            password,
            profileImage
        })
        await user.save();

        // génération d'un token JWT pour l'utilisateur
        const token = generateToken(user._id);

        res.status(201).json({
            // message: 'Utilisateur créé avec succès',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                profileImage: user.profileImage
            },
        })

       } catch (error) {
        res.status(500).json({ message: 'Erreur du serveur' });
    }
});
//#endregion Register


/**  
 * Route pour la connexion d'un nouvel utilisateur
 * Méthode: POST
 * URL: /login
 */

//#region Login
router.post('/login', async (req, res) => {
    // Logique de connexion ici - fonction appelée lors d'une requête POST à /login
    try {
        // Récupération des données de connexion depuis le corps de la requête
        const { email, password } = req.body;
        // Vérification que tous les champs sont remplis
        if (!email || !password) return res.status(400).json({ message: 'Tous les champs sont requis' });

        // recherche de l'utilisateur dans la base de données par email
        const user = await User.findOne({ email });
        // si l'utilisateur n'existe pas renvoi une erreur 400
        if (!user) return res.status(400).json({ message: "Cet utilisateur n'existe pas" });
    
        // verifie si le mdp est correct
        const isPasswordCorrect = await user.matchPassword(password);
        // si le mot de passe est incorrect renvoi une erreur 400
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Mot de passe incorrect' });
        

        // génération d'un token JWT pour l'utilisateur
        const token = generateToken(user._id);
        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                password: user.password,
                profileImage: user.profileImage
            },
        })
    } catch (error) {
        res.status(500).json({ message: 'Erreur du serveur' });
    }
});
//#endregion Login

export default router;
