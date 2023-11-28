const parsers = {

    handleResponse:(data)=>{

        return {
            msj:"exitoso",
            status:200,
            data:data
        }

    },
    handleError: (data)=>{
        return {
            msj:"Error",
            status:400,
            data:data
        }

    }

}

export default parsers;