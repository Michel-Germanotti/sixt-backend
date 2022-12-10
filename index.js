// Permet d'accéder aux variables d'environnement ".env"
require("dotenv").config();
const express = require('express');
const isAuthenticated = require('./middleware/isAuthenticated');
const cors = require("cors");

// Package permettant de faire des requêtes vers l'API
const axios = require("axios");
const { message } = require("prompt");


const app = express();
app.use(express.json());
app.use(cors());

// Routes
const locationsRoutes = require('./routes/locations');
app.use(locationsRoutes);




// Route accueil
app.get("/", (req, res) => {
    try {
        console.log('fuck');
        req.status(200).json(responseSixt);
    } catch (error) {
        res.status(400).json({error: message});
    }
  });




  
// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log("Server started 🚀 on the port :", process.env.PORT);
});