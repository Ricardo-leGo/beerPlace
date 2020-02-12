const {model, Schema} = require('mongoose')

const locationSchema = new Schema (
  {
    name: String,
    location: {
      address: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Location', locationSchema)