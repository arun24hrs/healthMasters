const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_img: {type: String, required: true},
    product_name: {type: String, required: true, minlength:3},
    product_weight: {type: Number,required: true},
    product_price: {type: Number, required: true},
    product_discounted_price: {type: Number, required: true},
    product_desc: {type: String, required: true},
    product_rating: {type: Number, required: true},
    product_type: {type: String, enum:["weight_loss", "weight_gain"]},
    product_qty: {type: Number, min: 1, required: true},
    user_id: {type: String, required: true}
},{
    versionKey: false
});

const CartModel = mongoose.model("cart",productSchema);

module.exports = {
    CartModel
}
