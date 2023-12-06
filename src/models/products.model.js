import { model,Schema } from "mongoose";

const productSchema = new Schema(

    {
    
        name:{ type:String, required:true },
        enterprise: {type:String, required:true},
        price:{ type:Number, required:true },
        description:{ type:String, required:false },
        code:{ type:String, required:true },
        thumbnail:{ type:String, required:false },
        stock:{ type:String, required:true, default:0 }


    },{ timestamps:true }

);

const productModel = model("products", productSchema);

export default productModel;
