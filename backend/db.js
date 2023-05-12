const mongoose = require("mongoose");
require("dotenv").config(process.env.MONGOURL);

const connection = mongoose.connect(process.env.MONGOURL);


module.exports = connection;

// process.env.MONGOURL

// "mongodb://127.0.0.1:27017/health"