const {model, Schema} = require('mongoose')
const PLM             = require('passport-local-mongoose')


const userSchema = new Schema(
  {
    email:    String,
    name:     String,
    slakID:   String,
    googleID: String,
    image: {
      type:String,
      enum:["admin", "invited"],
      default: "invited"
    }

  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM, { usernameField: "email" });
module.exports = model("User", userSchema)

