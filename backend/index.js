const express = require("express");
const connection = require("./db");
require("dotenv").config();

const app = express();

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("Connected to the DB.")
        console.log(`Port is running on ${process.env.PORT}`)

    } catch (error) {
        console.log("Error connecting to the DB.")
    }
})