import express from "express"; //importar express
import enviroment from "./config/dotenv.js"; //importar variables de entorno 

import productRouter from "./routes/products.router.js";
import userRouter from "./routes/users.router.js";	
import viewsRouter from "./routes/views.router.js"

import connectDB from "./config/mongoose.js"
import cors from "cors";
import hbs from "express-handlebars";

//creamos el servidor express
const app = express();

//implementamos middlewares
app.use(express.json() );
app.use(express.urlencoded() );
app.use(cors());

app.use("/products",productRouter);
app.use("/users",userRouter);
app.use("/views", viewsRouter )

app.use( express.static("src/public") );

app.engine("hbs", hbs.engine());
app.set("view engine", "hbs");
app.set( "views", "src/public/views" );

//el metodo listen sirve para levantar el servidor en un determinado puerto
app.listen(enviroment.PORT , ()=>{ connectDB() });
