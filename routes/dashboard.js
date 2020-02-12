const router = require('express').Router()
const places = require('../models/Places')

  
  router.get('/dashboard',  async (req,res)=> {



    const placesl =await places.find()
      console.log(placesl)
      
    let config = {
      menuOut:true,
      styles:'dashboard.css', 
      privado:true
  
    }
  
    res.render('secretRoutes/dashboard', config)
  }
  )

  module.exports = router