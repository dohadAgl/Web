const express = require('express')
const path = require('path')
const router = express.Router()
const Product = require('../models/Product')

router.get('/urun',(req,res)=>{
    Product.find({}).then((urun)=>{
        res.render('admin/adminUrun',{urun:urun})
    })
    
})
router.post('/urun',(req,res)=>{
    let images = req.files.images
    images.mv(path.resolve(__dirname,'../public/img/productimg',images.name))
    console.log(req.body)
    Product.create({
        ...req.body,
        images:`/img/productimg/${images.name}`
    })
    req.session.sessionFlash = {
        type: 'alert alert-success  text-center',
        message : 'Ürün Başarıyla Eklendi'
    }
    res.redirect('/admin/urun')

})

router.delete('/urun/:id',(req,res)=>{
    
    Product.deleteOne({_id: req.params.id }).then(()=>{
        res.redirect('/admin/urun')
    })
})


module.exports = router