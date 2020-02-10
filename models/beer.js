const {model, Schema} = mongoose

const beerSchema = nee Schema({
  name:String,
  origin:String,
  beetType:{
    type:String,
    enum:['Lager',
          'Pilsen',
          'Abadía',
          'Gueuze-Lambic',
          'Blanca',
          'Ale',
          'Stout'],
          default:'Lager'
  },
  description:String,
  location:{
    type:{type:String},
    coordinates:[]
  },
  rate:{
    type:Number,
    min:1,
    max:5
  }
},{
  timestamps:true
})


module.exports = model('beer',beerSchema)