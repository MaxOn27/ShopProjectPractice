import express from "express";

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../ShopController/ShopController.js";

const router = express.Router();

router.get("/api/get-products", getProducts);
// router.get("/api/todo/:id", getProductById);
router.post("/api/post-product", createProduct);
router.put("/api/update-product/:id", updateProduct);
router.delete("/api/remove-product/:id", deleteProduct);

export default router;