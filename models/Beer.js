const {model, Schema} = require('mongoose')

const beerSchema = new Schema(
  {
    name: String,
    typeBeer: String,
    subtypeBeer: String,
    description: String,
    location: [
      {
      type:Schema.Types.ObjectId,
      ref: 'Location'
      }
    ],
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('beer', beerSchema)