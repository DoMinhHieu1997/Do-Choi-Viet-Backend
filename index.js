const express = require("express");
const { connectToDb } = require("./database");
const router = require("./routers");
const cors = require('cors');
const { MongoClient } = require("mongodb");

const app = express();
app.use(
    cors({
        origin: "*"
    })
);
app.use(express.json());

app.use('/',(req,res,next)=>{
    new MongoClient("mongodb+srv://admin:admin123@cluster0.j9yngv5.mongodb.net/?retryWrites=true&w=majority").connect(()=>{
        next()
    })
})
app.use(router);

connectToDb();
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('App is running at ' + port);
});