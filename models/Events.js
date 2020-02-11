const {model, Schema} = require ('mongoose')

const eventsSchema = new Schema (
  {
    name: String,
    location: {
      address:{
        type: String
      },
      coordinates: {
        type: [Number]
      }    
    },
    date: Date,
    descrition: String,
    smallDescription: String
  }
)

module.exports = model ('Events', eventsSchema)