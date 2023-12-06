import productModel from "../models/products.model.js"

const productServices = {

    getAll: async(params = {})=>{

       const allProducts = await productModel.find(params);
       return allProducts;

    },
    getOne:async(id)=>{

        const product = await productModel.findOne({_id:id})
        return product;

    },

    createOne:async(body)=>{

        const newProduct = await productModel.create(body);
        return newProduct;

    },

    updateOne:async(id, newData)=>{

        const oldproductData = await productModel.findOneAndUpdate({_id:id}, newData);
        return oldproductData;

    },

    deleteOne:async(id)=>{

        const deletedProduct = await productModel.deleteOne({_id:id})
        return deletedProduct;

    },

}

export default productServices;