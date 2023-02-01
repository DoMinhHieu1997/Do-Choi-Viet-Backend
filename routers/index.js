const express = require("express");
const { MongoClient } = require("mongodb");
const authRouter = require("./auth");
const productRouter =  require("./product");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);
router.get('/',(_,res)=>{
    new MongoClient("mongodb+srv://admin:admin123@cluster0.j9yngv5.mongodb.net/?retryWrites=true&w=majority").connect(()=>{
        res.send('reconnecDB')
    })
})

module.exports = router;