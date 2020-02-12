const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')



router.get('/profile', async (req, res)=>{

      
  let config = {
      menuOut:true,
      styles:'profile.css'

    }
    res.render('secretRoutes/profile', config)} )


module.exports = router