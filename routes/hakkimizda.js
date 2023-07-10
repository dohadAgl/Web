const express = require('express')
const router = express.Router()
const Hakkimizda = require('../models/Hakkimizda')
const admin = require('../routes/post')


router.get('/hakkimizda',(req,res)=>{

   Hakkimizda.find({}).then((hakkimizda)=>{
    res.render('admin/adminHakkimizda',{hakkimizda:hakkimizda})
   })

    
})

router.post('/hakkimizda', (req, res) => {
    console.log(req.body);
  
    const { hakkimizdaText1, hakkimizdaText2, hakkimizdaText3, misyon, vizyon } = req.body;
  
    const newData = { hakkimizdaText1, hakkimizdaText2, hakkimizdaText3, misyon, vizyon };
  
    Hakkimizda.findOneAndUpdate({}, newData, { upsert: true, new: true })
      .then(() => {
        res.redirect('/admin/hakkimizda');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while updating the document.');
      });
  });
  
module.exports = router
