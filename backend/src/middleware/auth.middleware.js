import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import e from 'express';


/* const response = await fetch('http://localhost:3000/api/books', {
    method: 'POST',
    body: JSON.stringify({
        title,
        caption
}),
headerts: { Authorization: `Bearer ${token}` },
}); */

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer", "");
        if (!token) return res.status(401).json({ message: "Pas de jeton d'authentification acces refusé" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(401).json({ message: "Le Token n'est pas valide" });

        req.user = user;
        next();
    } catch (error) {
        console.error("Authentication error:", error.message);
        res.status(401).json({ message: "Le Token n'est pas valide" });
    }
};



