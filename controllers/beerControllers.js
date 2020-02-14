const Beer = require('../models/Beer')
const Place = require('../models/Places')
//const { Router } = require("express")

exports.createGet = async (req, res) => {
  const placesArray = []
  await Place.find({}, function(err,places){
    places.forEach(
      function(place){
        placesArray.push(place)
        console.log(place)
      }
    )
  })

  
  // const arreglo = getPlaces
  // console.log(arreglo)
  res.render('secretRoutes/create-Beer')
}

exports.createPost = async (req, res) => {
  // console.log( req.body )
  // const arrID = []
  // if(req.body.name === 'true'){
  //   arrID.push({_id})
  // }
  // console.log(arrID)
  
  const { name, typeBeer, subtypeBeer, description, longitude, latitude,  image} = req.body
  const newBeer = {
    name,
    typeBeer,
    subtypeBeer,
    description,
    image
  }
  //console.log(newPlace)
  const { _id } = await Beer.create(newBeer)

  
  res.redirect('/profile')
}

exports.beerGet = async (req, res) => {
  const { id } = req.params
  const beer  = await Beer.findById(id)
  res.render('beer', beer)
}

exports.profileGet = async (req, res) => {
  res.render('profile')
}