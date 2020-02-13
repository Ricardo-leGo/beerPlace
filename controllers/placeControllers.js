const Place = require ('../models/Places')

exports.createGet = (req, res) => {
    res.render('secretRoutes/create-location')
  }
  
  exports.createPost = async (req, res) => {
    const { name, address, latitude, longitude} = req.body
    const newLocation = {
      name,
      location: {
        address,
        coordinates: [longitude, latitude]
      },
    }
    //console.log(newPlace)
    const { _id } = await Place.create(newLocation)
    res.redirect(`/place/${_id}`)
  }
  
  exports.placeGet = async (req, res) => {
    //console.log(req.params)
    const { id } = req.params
    const place = await Place.findById(id)
    res.render('place', place)
  }

  exports.placesUpdate = async (req, res) =>{
    const { id } =req.params
    const updatePlaces = await Place.findByIdAndUpdate(id)
    
  }

  exports.getPlaces = async (req,res) => {
    const places = await Place.collection
  }

  //este código espera si  queremos que se pinte en el usuario o en general 
  
//   exports.profileGet = async (req, res) => {
//     res.render('profile')
//   }