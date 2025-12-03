import mongoose from "mongoose";
import User from './User.js';

// Définition du schéma de données pour les livres
const bookSchema = new mongoose.Schema({
  // Champ de données et leur types
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true  // Ajout des champs createdAt et updatedAt
});

const Book = mongoose.model('Book', bookSchema);

export default Book;