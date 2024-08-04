const express = require('express');
const Product = require("../models/productModel")
const router = express.Router();
const {getProducts, getProduct, createProduct, updatedProduct, deleteProduct} = require('../controllers/Product.controller')

// router.get('/', async (req, res) => {
//     try {
//         const product = await Product.find({});
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({message:error.message})
        
//     }
// })

router.get('/', getProducts);
router.get("/:id", getProduct);

router.post("/", createProduct);  //ctrl space 

router.put("/:id", updatedProduct);

router.delete("/:id", deleteProduct);


module.exports = router;