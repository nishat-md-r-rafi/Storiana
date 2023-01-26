const { json } = require('stream/consumers');
const Product = require('../models/Product');
const { verifyTokenAndAdmin } = require('./verifyToken');

const router = require('express').Router();



router.post('/add', verifyTokenAndAdmin, async (req, res) => {

    const newProduct = new Product(req.body);
    try {
        await newProduct.save();
        res.status(200).send(newProduct);
    } catch(err){
        res.status(403).json(err)
    }
});



// UPDATE PRODUCT
router.put('/update/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedProduct);
    } catch(err){
        res.status(500).json(err)
    }
});

router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(200).send("Product deleted successfully!")
    } catch(err){
        res.json(err);
    }
})


// GET ONLY ONE PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch(err){
        res.status(404).send("Product not found");
    }
});

// GET ALL THE PRODUCTS
router.get('/', async(req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(1);
        } else if(qCategory){
            products = await Product.find({category: {$in: qCategory}})
        } else {
            products = await Product.find();
        }

        res.send(products);
            
    } catch(err){
        res.status(403).json(err);
    }
})


module.exports = router