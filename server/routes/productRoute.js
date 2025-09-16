import express from "express";
import { ProductController } from "../controllers/productController.js";
import { ProductValidation } from "../middlewares/productValidation.js";

const router = express.Router();

// GET /products - Get all products
router.get("/", ProductController.getAllProducts);

// GET /products/:id - Get product by id
router.get("/:id", ProductController.getProductById);

// POST /products - Create new product
router.post("/", ProductValidation.validateProduct, ProductController.createProduct);

// PUT /products/:id - Update product
router.put("/:id", ProductValidation.validateProduct, ProductController.updateProduct);

// DELETE /products/:id - Delete product
router.delete("/:id", ProductController.deleteProduct);

export default router;
