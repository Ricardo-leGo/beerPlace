const Beer = require('../models/Beer')

exports.createGet = (req, res) => {
  res.render('secretRoutes/create-Beer')
}

exports.createPost = async (req, res) => {
  console.log( req.body )
  const arrID = []
  if(req.body.QuieroChela === 'true'){
    arrID.push("5e43679e65c71d3823f4c505")
  }
  console.log(arrID)

  
  const { name, typeBeer, subtypeBeer, description, longitude, latitude,  image} = req.body
  const newBeer = {
    name,
    typeBeer,
    subtypeBeer,
    description,
    location: {
      address,
      coordinates: [longitude, latitude]
    },
    image
  }
  //console.log(newPlace)
  const { _id } = await Beer.create(newBeer)
  res.redirect(`/place/${_id}`)
}

exports.placeGet = async (req, res) => {
  const { id } = req.params
  const place = await Place.findById(id)
  res.render('place', place)
}

exports.profileGet = async (req, res) => {
  res.render('profile')
}