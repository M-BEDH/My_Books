import express from 'express';
import cloudinary from "../lib/cloudinary.js";
import Book from '../models/Book.js';
import { protectRoute } from "../middleware/auth.middleware.js";

// creation objet router pour gerer les routes de l'application
const router = express.Router();

router.post("/", protectRoute, async (req, res) => {
    try {
        const { title, author, caption, rating, image } = req.body;

        if(!title || !author || !caption || !rating || !image) {
            return res.status(400).json({ message: "Tous les champs sont requis" });
        }
        const uploadResponse = await cloudinary.uploader.upload(image);
        const imageUrl = uploadResponse.secure_url;

        const newBook = new Book({
            title,
            author,
            caption,
            rating,
            image: imageUrl
        });

        // Sauvegarde du nouveau livre dans la base de données
        await newBook.save();

        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du livre", error });
    }
});

export default router;