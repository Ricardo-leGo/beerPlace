const { Router } = require("express")
const router = Router()

const { 
  createGet,
  createPost,
  beerGet,
  profileGet
} = require("../controllers/beerControllers");

router
  .get('/create-Beer', createGet)
  .post('/create-Beer', createPost)
  .get('/beer/:id', beerGet)
  //.get('/profile', profileGet)

module.exports = router;