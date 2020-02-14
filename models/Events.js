const { model, Schema } = require('mongoose')
 
const eventsSchema = new Schema(
  {
    eventname: {
      type: String,
      required: true
    },
    location: {
      coordinates: {
        type: [Number],
      },
      address: {
        type: String,
      }
   
    },
    author: {
      type: String,
      required: true
    },
    namePlace: {
      type: String,
    },
    image:{
      type:String,
    },
    description:String
  },
  {
    timestamps: true,
    versionKey: false
  }
)


module.exports = model('events', eventsSchema)