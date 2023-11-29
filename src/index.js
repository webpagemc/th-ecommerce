import express from "express"; //importar express
import enviroment from "./config/dotenv.js"; //importar variables de entorno 
import productRouter from "./routes/products.router.js";
import userRouter from "./routes/users.router.js";	
import connectDB from "./config/mongoose.js"

//creamos el servidor express
const app = express();

//implementamos middlewares
app.use(express.json());
app.use(express.urlencoded());

app.use("/products",productRouter);
app.use("/users",userRouter);

//el metodo listen sirve para levantar el servidor en un determinado puerto
app.listen(enviroment.PORT , ()=>{ connectDB() });
