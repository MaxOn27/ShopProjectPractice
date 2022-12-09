// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
//
// import ShopRoutes from "./ShopRoutes/ShopRoutes.js";
//
// const app = express();
// app.use(cors());
// app.use(express.json);
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(ShopRoutes);
//
// app.listen(process.env.PORT || 8080, () => {
//     console.log("Server is up and running...");
// });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Product = require("./models/product");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get-products", (req, res) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.send(rows);
        })
        .catch(error => {
            throw error;
        });
});

app.post("/api/post-product", (req, res) => {
    const {title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, price, description);

    product.save();
});

app.delete("/api/remove-product/:id", (req, res) => {
    const {id} = req.params;
    Product.deleteById(id)
});

app.put("/api/update-product/:id", (req, res, next) => {
    const {id, title, imageUrl, price, description} = req.body;
    const product = new Product(title, imageUrl, price, description)

    product.update(id);
})

app.listen(process.env.PORT || 8080, () => {
    console.log("Server is running on localhost:8080")
})