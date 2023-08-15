require('dotenv').config();
const express = require('express');
var cors = require('cors');


//* Ya no se usa->
//? const app = express() 

class Server {

    //! Creamos el constructor con una instacia de app expres
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;


        //&Tambien es bueno poner las rutas definidas aquí para quien llegue al server pueda ver que rutas están disponibles
        this.usersPath = "/api/usuarios";


        //& => Middle-Wares (Esta función siempre se ejecuta cuando levantamaos el servidor)
        //& => En este caso la vamos a usar para servir la carpeta public
        this.middlewares();

        //! Al inciar una instancia de la clase, el metodo constructor dispara esta clase e inicializa las rutas de la app
        this.routes();
    }


    middlewares() {

        //! Agregamos el cors de listas blancas o negras, permite 
        this.app.use(cors(
            //! Mio para test
            {
                origin: '*'
            }
        ))


        //!Parseo y lectura del body
        //& esto para indicarle al server como se debe comunicar [json, xml, ect]
        this.app.use(express.json()) //! Le decimos a la misma instancia del server que su comunicacion por defecto será json


        //* Desde la variable app con use app.use => le indicamos que es un middleware*/
        this.app.use(express.static("public"));

    }

    //& Creamos un metodo para manejar las rutas del rest server
    routes() {
        //! Cuando pase por esta ruta traer mediante el middleware lo que sea necesario
        //!Cuanso pase por estas rutas trer lo necesario get.put,delete desde el siguiente archivo
        this.app.use(this.usersPath, require('../Routes/usuarios'))
    }

    //& Metodo para mostrar si el callbak retorna un mesaje de vida
    listen() {
        this.app.listen(this.port, () => {
            console.log("REST SERVER- IS RUNNING IN PORT:", this.port);
        });
    }
}

module.exports = Server;
