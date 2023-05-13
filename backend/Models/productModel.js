const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    product_img: {type: String, required: true},
    product_name: {type: String, required: true, minlength:3},
    product_weight: {type: Number,required: true},
    product_price: {type: Number, required: true},
    product_discounted_price: {type: Number, required: true},
    product_desc: {type: String, required: true},
    product_rating: {type: Number, required: true},
    product_type: {type:String, enum:["weight_loss", "weight_gain"]}
},{
    versionKey: false
});

const ProductModel = mongoose.model("product",productSchema);

module.exports = {
    ProductModel
}


/*
{
    "product_img":"https://cdn.shopify.com/s/files/1/0551/9779/4433/products/s2_b787593f-640d-42d6-a87e-33b389911fae.jpg?v=1677067410&width=360",
    "product_name":"Daily Power Booster",
    "product_weight": 300,
    "product_price":249,
    "product_discounted_price": 199,
    "product_desc": "Daily Power Booster is the ideal thing to eat in order to have an energy boost. It comes packed with 23 ingredients and is doctor's recommended. Nuts, berries & seeds are rich sources of health-boosting nutrients and their consumption can provide multiple benefits to our body. The antioxidants they contain help to protect us from damaging free radicals that are present in the environment and contribute to premature aging, chronic diseases like cancer and heart disease, weight gain, and other conditions. It combines exotic nuts like Brazil Nuts, Hazelnuts, Pecan Nuts, Macadamia and many more. All of these exotic nuts are rich in vitamins, proteins, antioxidants, and minerals but some of them also contain Omega 3 fatty acids.",
    "product_rating": 4,
    "product_type": "weight_loss"
}
*/