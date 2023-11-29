import parsers from "../utils/parsers";

const userController = {
    getAllUsers: (req, res) => {
        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)

        }
    },


    getUserById: (req, res) => {
        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)

        }
    },

    createUser: (req, res) => {
        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)

        }
    },

    updateUser: (req, res) => {
        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)

        }
    },


    deleteUser: (req, res) => {
        try {

            const response = parsers.handleResponse([])
            res.status(200).send(response)

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)

        }
    }

}

export default userController;