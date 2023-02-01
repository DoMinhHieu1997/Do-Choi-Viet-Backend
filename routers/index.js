const express = require("express");
const { MongoClient } = require("mongodb");
const authRouter = require("./auth");
const productRouter =  require("./product");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/products", productRouter);

module.exports = router;