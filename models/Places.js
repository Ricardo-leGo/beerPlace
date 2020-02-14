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
     
    },
    beers:[{
      type : Schema.Types.ObjectId,
      ref: 'Beer'
    }],
    name:String
  },
  {
    timestamps: true,
  }
)

module.exports = model('Places', PlacesSchema)
