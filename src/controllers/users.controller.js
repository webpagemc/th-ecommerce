import parsers from "../utils/parsers.js";
import usersService from "../services/users.service.js";

const usersController = {

    getAllUsers: async (req, res) => {
        try {
            const AllUsers = await usersService.getAll();
            const response = parsers.handleResponse(AllUsers);
            res.status(200).send(response);

        } catch (err) {

            const response = parsers.handleError(err)
            res.status(400).send(response)
        }

    },

    getOneUser: async (req, res) => {
        try {
            const oneUser = await usersService.getOne(req.params.id);
            const response = parsers.handleResponse(oneUser);
            res.status(200).send(response);
        } catch (error) {
            const response = parsers.handleError(error);
            res.status(400).send(response);
        }
    },
    createUser: async (req, res) => {
        try {
            const newUser = await usersService.createOne(req.body);
            const response = parsers.handleResponse(newUser);
            res.status(200).send(response);
        } catch (error) {
            const response = parsers.handleError(error);
            res.status(400).send(response);
        }
    },
    updateUser: async (req, res) => {
        try {
            const updateUser = await usersService.updateOne(req.params.id, req.body);
            const response = parsers.handleResponse(updateUser);
            res.status(200).send(response);
        } catch (error) {
            const response = parsers.handleError(error);
            res.status(400).send(response);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const deleteUser = await usersService.deleteOne(req.params.id);
            const response = parsers.handleResponse(deleteUser);
            res.status(200).send(response);
        } catch (error) {
            const response = parsers.handleError(error);
            res.status(400).send(response);
        }
    }
};

export default usersController;
