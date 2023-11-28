const parsers = {

    handleResponse:(msj, status, data)=>{

        return {
            msj:msj,
            status:status,
            data:data
        }

    }

}

export default parsers;