const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("./models/product");
const db = require("./utils/database");


const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    Product.fetchAll()
        .then(([ rows ]) => {
            res.send(rows);
            console.log("Response: ", rows);
        })
        .catch(error => {
            throw error;
        });
});

app.post("/api/post", (req, res) => {
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, price, description);

    product.save();
});

app.listen(process.env.PORT || 8080)