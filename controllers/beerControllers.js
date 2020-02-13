const Beer = require('../models/Beer')
//const { Router } = require("express")

exports.createGet = (req, res) => {

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
  res.redirect(`/beer/${_id}`)
}

exports.beerGet = async (req, res) => {
  const { id } = req.params
  const beer  = await Beer.findById(id)
  res.render('beer', beer)
}

exports.profileGet = async (req, res) => {
  res.render('profile')
}