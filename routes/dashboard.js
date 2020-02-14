const router = require('express').Router()
const places = require('../models/Places')

  
  router.get('/dashboard',  async (req,res)=> {




    let config = {
      menuOut:true,
      styles:'dashboard.css',
      logged:true
  
    }

    let objeto = {
      places,
      config
    }

    res.render('secretRoutes/dashboard', {config, places})
  }
  )

  module.exports = router