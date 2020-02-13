const {model, Schema} = require('mongoose')
const PLM             = require('passport-local-mongoose')

let varImg = Math.floor(Math.random()*450)
const userSchema = new Schema(
  {
    email:    String,
    name:     String,
    img:{
      type:String,
      default:`https://i.picsum.photos/id/${varImg}/400/400.jpg`
    },
    token:    String,
  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM, { usernameField: "email" });
module.exports = model("User", userSchema)

