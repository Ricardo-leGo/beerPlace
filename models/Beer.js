const {model, Schema} = require('mongoose')

const beerSchema = new Schema (
  {
    name: String,
    typeBeer: {
      type: String,
      subtypeBeer: {
        type: String
      }
    },
    
    description: String,
    location: {
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    },
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Beer', beerSchema)