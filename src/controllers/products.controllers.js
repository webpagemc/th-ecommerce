import parsers from "../utils/parsers.js"
import productService from "../services/product.service.js"

const productController = {

    getAllProducts:async(req ,res)=>{

        try {

            const allProducts = await productService.getAll({status:true});
            const response = parsers.handleResponse(allProducts);
            res.status(200).send(response);
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    getOnlySamsung: async(req, res) => {

        const samsungs = await productService.getAll({enterprise:"Samsung"})
        res.status(200).send(samsungs)

    },

    getOneProduct:async(req ,res)=>{

        try {

            const {id} = req.params;
            const product = await productService.getOne(id);

            if(product.status){

                const response = parsers.handleResponse(product)
                res.status(200).send(response)

            }else{ throw new Error("Product NOT exist!") }

            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },
    
    createProduct:async(req ,res)=>{

        try {

            const { body } = req;
            const newProduct = await productService.createOne(body);
            const response = parsers.handleResponse(newProduct)
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    updateProduct:async(req ,res)=>{

        try {

            const {id} = req.params;
            const {body} = req

            const oldproductData = await productService.updateOne(id,body)

            const response = parsers.handleResponse(oldproductData);
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    changeProductStatus:async(req, res)=>{

        try {
            
            const {id} = req.params;

            await productService.updateOne(id, { status:false });
    
            const response = parsers.handleResponse(`Se cambio el estado del producto con el id ${id}`)
            res.status(200).send(response);
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }

    },

    deleteProduct:async(req ,res)=>{

        try {

            const {id} = req.params;

            await productService.deleteOne(id)

            const response = parsers.handleResponse(`Se elimino DEFINITIVAMENTE el producto con el id ${id}`)
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    }
}

export default productController;