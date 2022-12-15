// Permet d'accéder aux variables d'environnement ".env"
require("dotenv").config();
const express = require('express');
// const isAuthenticated = require('./middleware/isAuthenticated');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const locationsRoutes = require('./routes/locations');
app.use(locationsRoutes);

// Route accueil
app.get("/", (req, res) => {
    try {
        req.status(200).json();
    } catch (error) {
        res.status(400).json({error: message});
    }
  });

app.get("*", (req, res) => {
    res.status(400).json(`Oups la ${Math.round(Math.random()*100)}ème compagnie c'est pas par là 🖖`);
})

// Lancement du serveur
app.listen(process.env.PORT, () => {
    console.log("Server started 🚀 on the port :", process.env.PORT);
});