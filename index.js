//Add Express
const express = require('express');

// Initialize Express
const app = express();

//Create Get Request
app.get("/",(req,res) =>{
  res.send("Express on Vercel");
});

//Initialize Server
const port = process.env.PORT || 9001;
app.listen(port,()=>{
  console.log("Running on port 5000.");
});

//Export the Express API
//In order for Vercel to turn Express into a serverless function,
//you have to export the Express instance for Vercel's build process
module.exports = app;
