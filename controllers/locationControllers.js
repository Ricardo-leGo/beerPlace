const Location = require ('../models/Places')

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
    const { _id } = await Location.create(newLocation)
    res.redirect(`/beer/${_id}`)
  }
  
  exports.placeGet = async (req, res) => {
    const { id } = req.params
    const beer = await Location.findById(id)
    res.render('Location', location)
  }

  //este código espera si  queremos que se pinte en el usuario o en general 
  
//   exports.profileGet = async (req, res) => {
//     res.render('profile')
//   }