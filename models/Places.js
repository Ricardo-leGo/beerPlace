const {model, Schema} = require('mongoose')

const PlacesSchema = new Schema (
  {
 
    location: {
      coordinates: {
        type: []
      },
      address: {
        type: String
      }
<<<<<<< HEAD
     
    },
    name:String
=======
    },
    beers: [{
      type : Schema.Types.ObjectId,
      ref: 'Beer'
    }]
>>>>>>> 4d644711eb5cc9ae0550cc0774ba17a46bc9fc03
  },
  {
    timestamps: true,
  }
)

module.exports = model('Places', PlacesSchema)
