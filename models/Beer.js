const {model, Schema} = require('mongoose')

const beerSchema = new Schema (
  {
    name: String,
    typeBeer: {
      subtypeBeer: {
        type: String
      }
    },
    
    description: String,
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Beer', beerSchema)