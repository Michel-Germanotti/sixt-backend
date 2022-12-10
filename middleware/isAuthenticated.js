// require("dotenv").config();
const axios = require("axios");

const isAuthenticated = async (req, res, next) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmI1NjJkNTdmN2RjZjAwMTZmMWIwMTciLCJlbWFpbCI6Im1pY2hlbC5nZXJtYW5vdHRpQGdtYWlsLmNvbSIsImV4cGlyYXRpb25EYXRlIjoiMjAyMy0wMy0wOVQwMDowMDowMC4wMDBaIiwiaXNUcmFpbmluZyI6dHJ1ZSwiaWF0IjoxNjcwNjY2NzcxfQ.mT9NEtgWMV87bpnqaWM6gAzC_cNJAcSETFJHtFiyyhI';
  try {
    const response = await axios.get('https://lereacteur-bootcamp-api.herokuapp.com/api/sixt', {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }); 
    console.log(response.data);
    
    if(response) {
      responseData = response.data;
      next();
    } 
    
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = isAuthenticated;