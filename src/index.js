import express from "express";
import enviroment from "./config/dotenv.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded())

app.get("/products/:id",(req ,res)=>{

    const id = req.params.id;
    const body = req.body

    console.log(id);
    console.log(body);

    res.send(`El parametro de url es ${id} y el nombre del producto es ${body.nombre}`)

});



app.listen(enviroment.PORT , ()=>{

    console.log("Server on 8080!");

});