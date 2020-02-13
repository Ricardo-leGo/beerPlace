const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')
const Beer = require('../models/Beer')
const loc = require('../models/Places')





router.get('/profile', async (req, res)=>{
  let user = await User.find({})
  let config = {
      menuOut:true,
      styles:'profile.css'

    }
    res.render('secretRoutes/profile', config)} )

router.post('/profile', async(req,res)=>{


})




module.exports = router