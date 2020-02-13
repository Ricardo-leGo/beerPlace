const {model, Schema} = require('mongoose')

const beerSchema = new Schema (
  {
    name: String,
    typeBeer: {
      subtypeBeer: {
        type: String
      }
    },
    places:[{
      type: Schema.Types.ObjectId,
      ref: 'Places'
    }],
    description: String,
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Beer', beerSchema)