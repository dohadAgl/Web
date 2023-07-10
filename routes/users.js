const express = require('express')
const router = express.Router()
const User = require('../models/Users')

router.get('/data', (req, res) => {
    User.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json({ error: err.message }));
  });

router.get('/register', (req, res) => {
    res.render('site2/register')
})

router.post('/register', (req, res) => {
    User.create(req.body).then((err, data) => {
        req.session.sessionFlash = {
            type: 'alert alert-success  text-center',
            message : 'Hesabınız Başarılı Bir Şekilde Oluşturuldu lütfen Giriş Yapın'
        }
        res.redirect('/users/login')
    }).catch((err) => {
        req.session.sessionFlash = {
            type: 'alert alert-success text-center',
            message : 'Bu Email daha önce kullanılmış'
        }
        res.redirect('/users/register')
    })

})

router.get('/login', (req, res) => {
    res.render('site2/login')
})
router.post('/login', (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }).then((veri) => {

        if (veri.password == password) {
            req.session.userId = veri._id
            res.redirect('/')
        }
        else{
            
            req.session.sessionFlash = {
                type: 'alert alert-success',
                message : 'Parola yanlış lütfen tekrar deneyin..'
            }
        
            res.redirect('/users/login')

        }

    }).catch((err) => {
        req.session.sessionFlash = {
            type: 'alert alert-success text-center',
            message : 'Bu email kayıtlı değil lütfen kayıt olun'
        }
        res.redirect('/users/login')
    })
})

router.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    })
   
})

module.exports = router
