const router = require('express').Router();
const passport = require('../config/passport')
const User = require('../models/User')



const {confirmAccount}= require ('../config/nodemailer')

/* GET home page */

//nodemailer.
const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
let token = '';
for (let i = 0; i < 25; i++) {
    token += characters[Math.floor(Math.random() * characters.length )];
}

router.get('/', (req, res, next) => {
  let config = {
    menuOut:false,
    styles:'login.css'

  }
  res.render('index', config);
});

router.get('/signup', (req,res,next)=>{
  res.render('passport/signup')
})

router.get('/login',(req,res)=> {

  if(passport.authenticate()){
    let config = {
      menuOut:true,
      styles:'login.css'

    }
    res.render('passport/login', config )

  }
  res.render('passport/login')
})


router.get('/dashboard', (req,res,next)=>{
  res.render('dashboard')
})

router.get('/verify',(req,res)=> {
  res.render('confirm', {message: 'El correo '})
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


      User.register({email,name,token}, password)
      .then(userCreated =>{
        
        res.redirect('/verify')
      })
      .catch(error=> {
        next(error)
      })

      confirmAccount(
        email, 
         `http://localhost:3000/verify:${token}`)
      
      })



router.post('/confirm', (req,res, netx)=>{
  res.redirect('/')
})

router.get('/logout', (req, res)=>{
  req.logout();
  res.redirect('/')
})







module.exports = router
