const express = require('express')
const Post = require('../models/Post')

const Hakkimizda = require('../models/Hakkimizda')
const Iletisim = require('../models/Iletisim')
const Index = require('../models/Index')
const Search = require('../models/Search')

const stringSimilarity = require('string-similarity');




const router = express.Router()

router.get('/', (req, res) => {
    Index.find({}).then(data =>{
       
        res.render('site2/index',{data:data})
    })
   
    
})
router.get('/haber', (req, res) => {
    Post.find({}).then((haber) =>{
    res.render('site2/haber',{ haber:haber })
    })
})
router.get('/haber/:id', (req, res) => {
    Post.findById(req.params.id).then(haberdetay =>{
        res.render('site2/haberDetay',{haberdetay:haberdetay})
    })
   
})
router.get('/hizmet', (req, res) => {
     res.render('site2/hizmet')
    
})




  router.get('/hakkimizda',(req,res)=>{
    Hakkimizda.find({}).then((info) =>{
       
        res.render('site2/hakkimizda',{ info:info[0] })
        })
})

router.get('/similasyon',(req,res)=>{
    res.render('site2/similasyon')

})

//reactnative app simülasyon harita 
router.get('/reactnativeharita',(req,res)=>{
    res.render('site2/reactNativeHarita')
})

router.get('/reactnativesondeprem',(req,res)=>{
    res.render('site2/reactNativeSonDepremDetay')
})


router.get('/warning',(req,res)=>{
    res.render('site2/warning')
 
})

router.get('/hazir',(req,res)=>{
    res.render('site2/hazir')
})
let newData = [];
router.post('/search',(req,res)=>{
    newData = []
  let bold = []
   Search.find({}).then(data =>{
    data.forEach(veri =>{
        const similarityScore = stringSimilarity.compareTwoStrings(req.body.search, veri.title);
      bold.push(similarityScore)
    //   console.log(bold);
    })
    const indexedArray = bold.map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value);

indexedArray.forEach(item => {

newData.push(data[item.index])
});

    console.log(newData)

    

   

    res.redirect('/search')
   })
})

router.get('/search',(req,res)=>{
    res.render('site2/search',{
data:newData
    })
    newData = [];
})

module.exports = router