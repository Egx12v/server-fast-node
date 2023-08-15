require('dotenv').config();
const express = require('express')
const app = express()

console.log("Hola mundo desde el rest Server");


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log("REST SERVER- IS RUNNING IN PORT:", process.env.PORT);
}
)