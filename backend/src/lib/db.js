//  importation de la bibliothèque mongoose pour interagir avec MongoDB
import mongoose from 'mongoose';

// exportation de la fonction de connexion à la base de données
export const connectDB = async () => {
    try {
        // connexion à la base de données MongoDB en utilisant l'URI de connexion depuis les variables d'environnement
      const connex = await mongoose.connect(process.env.MONGO_URI);
      // affichage d'un msg de connexion reussie avec l'hôte de la base de données
        console.log(`MongoDB Connected: ${connex.connection.host}`);
    } catch (error) {
        // affichage d'un msg d'erreur en cas de problème de connexion
        console.error(`Error: ${error.message}`);
        process.exit(1); // arrêt du processus en cas d'erreur (exit with failure)
    }
}