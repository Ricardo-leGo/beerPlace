const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')
const Beer = require('../models/Beer')
const loc = require('../models/Places')
const event= require('../models/Events')
const {createPost} = require('../controllers/beerControllers')





router.get('/profile', async (req, res)=>{
const { _id } = req.user
    let user = await User.findById({_id})
  
  let config = {
      menuOut:true,
      styles:'profile.css',
      logged:true

    }

    res.render('secretRoutes/profile', {config, user})
  } )


  router.post('/createevents', async  (req, res)=>{


      const {eventname,
        address,
        author,
        nameplace,
        description,
        eventcartel,
        longitude,
        latitude}=req.body



        const newEvent = {
          eventname,
          author,
          nameplace,
          description,
          eventcartel,
          location:{
            coodinates:[longitude,latitude],
            address }
        }
        console.log(newEvent);
        

        await event.create(newEvent)
      



    res.redirect('/profile')
  })



  
router.post('/profile', createPost)




module.exports = router