const {Router} = require("express");
const { ProductModel } = require("../Models/productModel");



const productRouter = Router();



// Route for getting all products from the data base

productRouter.get("/products",async (req,res)=>{
    try {
        const {type, order} = req.query;
        const query = {};
        if(type){
            query.product_type=type;
        };
        // if(type){
        //     query.product_type=type;
        // }
        console.log(query);
        if(order=="asc"){
            const data = await ProductModel.find(query).sort({product_discounted_price: -1});
            res.status(200).send(data);
        }else if(order=="desc"){
            const data = await ProductModel.find(query).sort({product_discounted_price: 1});
            res.status(200).send(data);
        }else{
            const data = await ProductModel.find(query);
            res.status(200).send(data);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({"msg":"something went wrong, please try again later."})
    }
});

/*

Some examples for getting products based on filters :-

http://localhost:8080/products?type=weight_gain&&order=desc
http://localhost:8080/products?type=weight_loss&&order=asc
http://localhost:8080/products?type=weight_gain&&order=asc
http://localhost:8080/products?type=weight_loss&&order=desc
http://localhost:8080/products?type=weight_gain
http://localhost:8080/products?type=weight_loss
http://localhost:8080/products?order=desc
http://localhost:8080/products?order=asc

If you want to just get all the products without any filters just use this url :-

http://localhost:8080/products


*/


// Route for getting single product from data base

productRouter.get("/product/singleProduct/:productID",async (req,res)=>{
    //console.log(req.params.productID)
    try {
        const product = await ProductModel.findById(req.params.productID);
        //console.log(product)
        if (product) {
            res.status(200).send(product);
        } else {
            res.send({"msg":"there is no product found with this particual ID."})
        }
    } catch (err) {
        res.status(404).send({"msg":"something went wrong, please try again later."})
    }
});

/*

Url for gettin single prouduct based on id :-

http://localhost:8080/product/singleProduct/idOfTheParticularProduct

Example :-
http://localhost:8080/product/singleProduct/645e6d9b42241f93a0d2add5

*/

productRouter.post("/product/create",async (req,res)=>{
     if (req.body.product_img && req.body.product_name && req.body.product_price && req.body.product_desc && req.body.product_discounted_price && req.body.product_rating && req.body.product_type && req.body.product_weight) {
        try {
            const payload = req.body;
            //console.log(payload)
            const new_product = new ProductModel(payload);
            await new_product.save();
            //console.log(new_product)
            const added_product = await ProductModel.findOne({_id: new_product._id})
            //console.log(added_product);
            if (added_product?.product_name?.length) {
                res.status(200).send(added_product);
            } else {
                res.status(404).send({"msg":"something went wrong, please try again later."})
            }
        } catch (err) {
            console.log(err);
            res.status(404).send({"msg": "something went wrong, please try again later."})
        }
     } else {
        res.send({"msg": "please fill all the fields for creating the new product."})
     }
});

module.exports = {
    productRouter
}