const { Router } = require("express")
const router = Router()

const { 
  createGet,
  createPost,
  placeGet,
  profileGet
} = require("../controllers/beerControllers");

router
  .get('/create-Beer', createGet)
  .post('/create-Beer', createPost)
  .get('/place/:id', placeGet)
  .get('/profile', profileGet)

module.exports = router;