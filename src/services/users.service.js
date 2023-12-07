import usersModel from "../models/usersModel.js";

const usersService = {
    getAll: async (params = {}) => {
        const allUsers = await usersModel.find(params);
        return allUsers;
    },
    getOne: async (id) => {
        const user = await usersModel.findOne({ _id: id });
        return user;
    },
    createOne: async (body) => {
        const newUser = await usersModel.create(body);
        return newUser;
    },
    updateOne: async(id,newData)=>{
        const updateUser = await usersModel.updateOne({_id:id},newData);
        return updateUser;
    },
    deleteOne: async(id)=>{
        const deleteUser = await usersModel.deleteOne({_id:id});
        return deleteUser;
    }

};
export default usersService;
