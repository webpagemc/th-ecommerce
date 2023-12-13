import { model,Schema } from "mongoose";

const userSchema = new Schema({ 
    //creamos el esquema de la colección
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true },
    direction: { type: String, required: true },
    zip: { type: Number, required: true },
    phone: { type: Number, required: false },
});

const usersModel = model("users", userSchema);
export default usersModel;