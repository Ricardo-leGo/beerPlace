const { Router } = require("express")
const router = Router()

const { 
  createGet,
  createPost,
  placeGet,
  profileGet
} = require("../controllers/locationControllers");

router
  .get('/create-location', createGet)
  .post('/create-location', createPost)
  //estas rutas van a esperar la vista hacia que pantalla queremos que se ven con el mapa
//   .get('/place/:id', placeGet)
//   .get('/profile', profileGet)

module.exports = router;


