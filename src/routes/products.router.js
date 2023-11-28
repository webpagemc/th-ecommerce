import express from "express";
import productController from "../controllers/products.controllers.js";

const productRouter = express.Router();

productRouter.get("/",productController.getAllProducts);

productRouter.get("/:id",productController.getOneProduct);

productRouter.post("/",productController.createProduct);

productRouter.put("/:id",productController.updateProduct);

productRouter.delete("/:id",productController.deleteProduct);

export default productRouter;