import { config } from "dotenv"; //se importa solo el metodo config desde la libreria dotenv

config(); //se ejecuta config para habilitar las variables de entorno (.env)

//creamos un objeto que almacenara las variables de entorno
const enviroment = {

    PORT:process.env.PORT

}

export default enviroment; //exportamos el objeto