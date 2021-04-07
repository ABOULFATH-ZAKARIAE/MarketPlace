const express = require('express');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');


const port = process.env.PORT || 5000;
const logWinston = require('../backend/logWinston')

app.use(express.json());
app.use(cors());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())




mongoose.connect('mongodb://localhost:27017/MarketPlace' , {
  useNewUrlParser: true
}).then(() => {
  logWinston.info("Successfully connected to the database");    
}).catch(err => {
  logWinston.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});



const user = require('./Routers/usersRouter');
app.use('/', user);
const seller = require('./Routers/vendeurRouter');
app.use('/seller', seller);

const product = require('./Routers/productRouter');
app.use('/seller/product', product);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })