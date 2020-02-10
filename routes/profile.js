const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')



router.get('/profile', (req, res)=>res.render('secretRoutes/profile') )


module.exports = router