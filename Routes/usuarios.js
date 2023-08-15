const { Router } = require("express");
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete } = require('../Controllers/usuarios')


const router = Router();

//*Se ante pone this ya que app no existe a menos que indiquemos que es mediante clase*/
//! Recordando que al usar la carpeta publica la raíz de app ("/") se remplaza por el index de la ruta publica
router.get('/', usuariosGet)//? Esto no lleva ()
//!Para hacer "push" update
router.put('/:id', usuariosPut);//& ESTE ID ES un valor segmentado y dinamico que puede servir para tomarlo en el controller, debe tener el mismo nombre
//!debe tener el mismo nombre tanto aquí como en el controller (Esto lo identifica express)
//? Si no se le pasa un id, ahora dará error ya que debe ser proporcionado a fuerza ahora

//! Para crear cosas enviar desde front
router.post('/', usuariosPost)
//! Para borrar
router.delete('/', usuariosDelete)


//! End Point mio testing con estatus sin autorización
router.get('/', (req, res) => {
    res.status(403).json({
        1: "weq",
        2: "Testing"
    })
})




module.exports = router;