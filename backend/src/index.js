//importing express module
import express from 'express';
//importing dotenv module to manage environment variables
import "dotenv/config";
import User from './models/User.js';

//importing routes
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

//importing the database connection function
import { connectDB } from './lib/db.js';


// création de l'instance de l'appli Express
const app = express();
const PORT = process.env.PORT || 3000;

// middleware pour parser le corps des requêtes en JSON
app.use(express.json());
// les routes d'authentification
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes)

// définir un port d'écoute pour le serveur
app.listen(PORT,  () => {
    // message de confirmation que le serveur fonctionne
    console.log(`Server is running on port ${PORT}`);  
    // appel de la fonction de connexion à la base de données
    connectDB();
});