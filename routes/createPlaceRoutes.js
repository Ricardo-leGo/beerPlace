const { Router } = require("express")
const router = Router()

const { 
  createGet,
  createPost,
  placeGet,
  profileGet,
  getPlacess
} = require("../controllers/placeControllers");

router
.get('/places', getPlacess)
  .get('/create-location', createGet)
  .post('/create-location', createPost)
 .get('/place/:id', placeGet)

module.exports = router;


