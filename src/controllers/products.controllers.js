import parsers from "../utils/parsers.js"

const productController = {

    getAllProducts:(req ,res)=>{

        try {

            throw new Error({data:"404"});

            const response = parsers.handleResponse("Request Successfull", 200, [])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleResponse("Error", 400, err)
            res.status(400).send(response) 

        }
    
    },

    getOneProduct:(req ,res)=>{

        res.status(200).send({msj:"Request Successfull"})
    
    },
    
    createProduct:(req ,res)=>{

        res.status(200).send({msj:"Request Successfull"})
    
    },

    updateProduct:(req ,res)=>{

        res.status(200).send({msj:"Request Successfull"})
    
    },

    deleteProduct:(req ,res)=>{

        res.status(200).send({msj:"Request Successfull"})
    
    }
}

export default productController;