// External Modules
const express = require("express");

// Instanced Modules
const app = express();

// Config
const PORT = 4000;

// Middleware

// Routes

// Bind Server to PORT
app.listen(PORT, function(){
    console.log(`Server is live on port ${PORT}!`);
});