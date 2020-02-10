const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')

/* GET home page */
console.log(passport+'estoy en routes');

router.get('/', (req, res, next) => {
  res.render('index');
});



router.get('/signup', (req,res,next)=>{
  res.render('passport/signup')
})

router.get('/login',(req,res)=> {
  res.render('passport/login', {message: 'El correo '})
})


router.get('/verify',(req,res)=> {
  res.render('confirm', {message: 'El correo '})
})

router.get('/dashboard',(req,res)=> {
  res.render('dashboard', {message: 'El correo '})
})
router.post(
  '/login',
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
    failureFlash: true
  })
)

router.post('/signup', (req,res,next)=> {


  const {name,email,password}= req.body
  if(email ===''|| password ===''||name ===''){
    return res.render("index", {mensaje: "El ususario o password con coinciden"})
  }


User.findOne({email})
      .then(user=> {
        if (user !== null){
          return res.render('confirm')
        }
      }).catch(error => {
        next(error)
      })


      User.register({email,name}, password)
      .then(userCreated =>{
        console.log(userCreated)
        res.redirect('/verify')
      })
      .catch(error=> {
        next(error)
      })


})



router.post('/confirm', (req,res, netx)=>{
  console.log(`${req} no hago nada`)
  res.redirect('/')
})

router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/')
})


module.exports = router
