const express = require("express");
const router = express.Router();
const axios = require("axios");

// Liste des agences
router.get("/locations", async (req, res) => {
    // Token API
    const token = process.env.API_KEY;

    // Params requête
    const q = req.query.q;
    
    try {
        const response = await axios.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/locations`, {
            headers: {
            'Authorization': `Bearer ${token}` 
            }, params : {q : q}
        }); 

        // // Récup id agence
        // for (let i = 0; i < response.data.length; i++) {
        //     console.log(response.data[i].id);
        // }

        res.status(200).json(response.data);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

// Liste des offres
router.get("/rentaloffers", async (req, res) => {

    // Token API
    const token = process.env.API_KEY;
    console.log(req.query); 

    // Params requête
    const pickupStation = req.query.pickupStation;
    const returnStation = req.query.returnStation;
    const pickupDate = req.query.pickupDate;
    const returnDate = req.query.returnDate;

    try {
        const response = await axios.get(`https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentaloffers`, {
            headers: {
            'Authorization': `Bearer ${token}` 
            }, params : {pickupStation: pickupStation, returnStation: returnStation, pickupDate: pickupDate, returnDate: returnDate }
        }); 

        // console.log(response.data)

        res.status(200).json(response.data);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Configurations de location
router.post('/rentalconfigurations/create', async (req, res) => {

    const token = process.env.API_KEY;

    const test = {offerId: req.body.offerId};
    console.log(test);

    try {
        const response = await axios.post(`https://lereacteur-bootcamp-api.herokuapp.com/api/sixt/rentalconfigurations/create`, {
            headers: {
            'Authorization': `Bearer ${token}` 
            }, params : {offerId: test}
        }); 
        console.log(response.data);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;