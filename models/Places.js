const {model, Schema} = require('mongoose')

const placesSchema = new Schema (
  {
    name: String,
    location: {
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    beers:[{
      type : Schema.Types.ObjectId,
      ref: 'Beer'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Places', placesSchema)