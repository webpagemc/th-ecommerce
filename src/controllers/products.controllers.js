import parsers from "../utils/parsers.js"

const productController = {

    getAllProducts:(req ,res)=>{

        try {
 throw new Error();
            const response = parsers.handleResponse([])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    getOneProduct:(req ,res)=>{

        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },
    
    createProduct:(req ,res)=>{

        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    updateProduct:(req ,res)=>{

        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    },

    deleteProduct:(req ,res)=>{

        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)
            
        } catch (err) { 

            const response = parsers.handleError(err)
            res.status(400).send(response) 

        }
    
    }
}

export default productController;