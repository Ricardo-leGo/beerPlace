const { model, Schema } = require('mongoose')

const eventsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      address: {
        type: String,
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
    author: {
      type: String,
      required: true
    },
    namePlace: {
      type: String,
      required: true
    },
    image:{
      type:String,
      required:true
    },
    description:String,
    smallDescription:String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('events', eventsSchema)