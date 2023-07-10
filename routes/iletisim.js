const express = require('express')
const router = express.Router()
const Iletisim = require('../models/Iletisim')


router.get('/iletisim',(req,res)=>{
    Iletisim.find({}).then((iletisim)=>{
    
        res.render('admin/adminIletisim',{iletisim:iletisim})
       })

})
router.post('/iletisim',(req,res)=>{
    console.log(req.body);
  
    const { whatsaap, phone, email, instagram, twitter, facebook } = req.body;
  
    const newData = { whatsaap, phone, email, instagram, twitter, facebook };
  
    Iletisim.findOneAndUpdate({}, newData, { upsert: true, new: true })
      .then(() => {
        res.redirect('/admin/iletisim');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while updating the document.');
      });
})


module.exports = router