const express = require('express')
const Post = require('../models/Post')
const path = require('path')
const router = express.Router()


router.get('/',(req,res)=>{
        res.render('admin/adminLogin')
})
router.post('/',(req,res)=>{
   
    console.log(req.body.email)
    if(req.body.email == "administrator" && req.body.password == "fuat1970" ){
        res.redirect('/admin/haber')
    }
    else{
      
        req.session.sessionFlash = {
            type: 'alert alert-success  text-center',
            message : 'Kullanı adı veya şifre yanlış Tekrar deneyin'
        }
        res.redirect('/admin')
    }
})


router.get('/haber',(req,res)=>{
    Post.find({}).then((haber)=>{
        res.render('admin/admin',{haber:haber})
    })
    
})
router.post('/haber',(req,res)=>{
    let images = req.files.images
    images.mv(path.resolve(__dirname,'../public/img/haberimg',images.name))
Post.create({
    ...req.body,
    images:`/img/haberimg/${images.name}`
})
req.session.sessionFlash = {
    type: 'alert alert-success  text-center',
    message : 'Haber Başarıyla Eklendi'
}
res.redirect('/admin/haber')
})
router.delete('/haber/:id',(req,res)=>{
    
    Post.deleteOne({_id: req.params.id }).then(()=>{
        res.redirect('/admin/haber')
    })
})


module.exports = router
