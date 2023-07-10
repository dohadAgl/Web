const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const expressSesion = require('express-session')
const connectMongo = require('connect-mongo')
const methodOverride = require('method-override')



const ileti = require('./models/Iletisim')

mongoose.connect('mongodb://127.0.0.1/lga_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const MongoStore = connectMongo(expressSesion);
const sessionStore = new MongoStore({
  mongooseConnection: mongoose.connection,
});

app.use(expressSesion({
  secret: 'testotesto',
  resave: false,
  saveUninitialized: true,
  store: sessionStore
}))

app.use((req, res, next) => {
  
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})

app.use(methodOverride('_method'))


app.use(fileUpload())

app.use(express.static('public'))


app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);
app.set('view engine', 'handlebars');



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use((req, res, next) => {
  const { userId } = req.session
  if (userId) {
    res.locals.displayLink = true
  }
  else {
    res.locals.displayLink = false
  }
  next()
})

app.use(async(req, res, next) => {
 await ileti.find({}).then((navLinks)=>{
    res.locals.navLink =navLinks[0]
    
    
   })
 
  next();
});



const main = require('./routes/main')
const posts = require('./routes/post')
const users = require('./routes/users')
const product = require('./routes/product')
const hakkimizda = require('./routes/hakkimizda')
const iletisim = require('./routes/iletisim')
const comment = require('./routes/comment')
const index = require('./routes/index')









app.use('/', main)
app.use('/urunler', comment)
app.use('/admin/', posts,product,hakkimizda,iletisim,index)
app.use('/users/', users)



// const port = process.env.port || process.env.PORT || 80;
// const hostname = '37.148.209.151'
// app.listen(port, hostname, () => {
//     console.log(`Web server is running on port 80`)
// })
const hostname = '127.0.0.1'
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`http://${hostname}:${port}`)
})