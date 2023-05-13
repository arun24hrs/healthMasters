const express = require("express");
const connection = require("./db");
require("dotenv").config();
const cors = require('cors');
const { userRouter } = require("./Routes/User.route");
const { productRouter } = require("./Routes/Product.route");
const { cartRouter } = require("./Routes/Cart.route");
const { Auth } = require("./middleware/Auth.middleware");

const app = express();

// All Middlewares
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
app.use("/",productRouter);
app.use(Auth);
app.use("/cart",cartRouter);

app.listen(process.env.PORT, async()=>{
    try {
        await connection;
        console.log("Connected to the DB.")
        console.log(`Port is running on ${process.env.PORT}`)

    } catch (error) {
        console.log("Error connecting to the DB.")
    }
})