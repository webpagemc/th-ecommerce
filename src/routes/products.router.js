import express from "express";
import productController from "../controllers/products.controllers.js";

const productRouter = express.Router();

productRouter.get("/",productController.getAllProducts);

productRouter.get("/samsungs",productController.getOnlySamsung )

productRouter.get("/:id",productController.getOneProduct);

productRouter.post("/",productController.createProduct);

productRouter.put("/:id",productController.updateProduct);

productRouter.delete("/:id", productController.changeProductStatus)

productRouter.delete("/definitive/:id",productController.deleteProduct);




export default productRouter;


//DELETE MANY:

/*
productRouter.delete("/deleteEnterprise/:enterprise", async(req, res)=>{

    const { enterprise } = req.params

    await productModel.deleteMany({enterprise: enterprise});
    const allProducts = await productModel.find();
    res.json(allProducts);

})
*/