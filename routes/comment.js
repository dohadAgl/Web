const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const Comment = require('../models/Comment')
const Users = require('../models/Users')

const moment = require('moment')

const now = moment();
const day = now.format('DD');
const month = now.format('MM');
const year = now.format('YYYY');

let date = `${day}/${month}/${year}`;
console.log(date);


router.get('/', (req, res) => {
    Product.find({}).then((urunler) => {
        res.render('site2/urunler', { urun: urunler })
    })
})
router.get('/:id', (req, res) => {
    Product.findById(req.params.id).then(urundetay => {
        Comment.find({urunId:req.params.id}).then(comment => { 
        res.render('site2/urunDetay', { urundetay: urundetay,comment:comment })
    })
    })
})
router.post('/:id', (req, res) => {
    console.log(req.body)
    const { userId } = req.session
    console.log(userId)
if(userId){
    Users.findById(userId).then(user=>{
    Comment.create({ yorum: req.body.yorum, urunId: req.params.id,username:user.username,surname:user.surname,date:date }).then((err, data) => {
        console.log('başarılı')
    })
})
    res.redirect(`/urunler/${req.params.id}`)
}
else{
    res.redirect('/users/login')
}
})
module.exports = router
