const express = require('express')
const router = express.Router()
const Index = require('../models/Index')

router.get('/index',(req,res)=>{
    Index.find({}).then(data =>{
        console.log(data)
        res.render('admin/adminIndex',{data:data})
    })
   
})

router.post('/index',(req,res)=>{
   console.log(req.body)
 
   const {title, p1, p2, s1b, s1m, s2b,s2m,s3b,s3m,s4b,s4m,testEt,nasilK,bilgiEdin,vb,vm,pdf } = req.body;
  
   const newData = { title, p1, p2, s1b, s1m, s2b,s2m,s3b,s3m,s4b,s4m,testEt,nasilK,bilgiEdin,vb,vm,pdf };
 
   Index.findOneAndUpdate({}, newData, { upsert: true, new: true })
     .then(() => {
       res.redirect('/admin/index');
     })
     .catch((error) => {
       console.error(error);
       res.status(500).send('An error occurred while updating the document.');
     });
})



module.exports = router
