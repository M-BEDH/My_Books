// Importation de la bibliothèque Mongoose
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

// Définition du schéma de données pour les utilisateurs
const userSchema = new mongoose.Schema({
  // Champ de données et leur types
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  profileImage: {
    type: String,
    default: ''
  }
}, { timestamps: true  // Ajout des champs createdAt et updatedAt
});

// Hashage du mot de passe avant de sauvegarder l'utilisateur
userSchema.pre('save', async function() {
    // Vérifier si le mot de passe a été modifié
    if (!this.isModified('password')) return ;
    
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
})

// Méthode pour comparer le mot de passe entré avec le mot de passe haché stocké
userSchema.methods.matchPassword = async function(userPassword) {
    return await bcrypt.compare(userPassword, this.password);
}

// Création du modèle de données User 
const User = mongoose.model('User', userSchema);

export default User;