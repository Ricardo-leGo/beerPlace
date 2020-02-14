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
  res.render('secretRoutes/create-Beer', {placesArray})
}

exports.createPost = async (req, res) => {
  const { name, typeBeer, subtypeBeer, description, image} = req.body
  //const {_id} =req.body

  const places = []
  Object.keys(req.body).forEach( beer => (beer.split('-')[0] === 'beer') ? places.push(beer.split('-')[1]) : null  )
  console.log('Places ', places)

  const beer ={
    name,
    typeBeer,
    subtypeBeer,
    description,
    image,
    places
  }
  const newBeer = await Beer.create(beer)
  places.forEach( async place => {
    await Place.updateOne({_id: place}, {$push: {beers: newBeer._id}}, {new: true})
  })

  
  res.redirect('/profile')
}

exports.beerGet = async (req, res) => {
  const {id } = req.params
  const beer  = await Beer.findOne({_id: id}).populate('places')
  console.log(beer);
  
  res.render('beer', beer)
}

exports.beersGet = async (req, res) =>{
  const beers = await Beer.find()
  
  res.render('beers', {beers})
}


exports.profileGet = async (req, res) => {
  res.render('profile')
}