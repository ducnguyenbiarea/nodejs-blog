const express = require('express')
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
// HTTP logger
const morgan = require('morgan');
const {engine} = require('express-handlebars');

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'));
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// routes init
route(app);

app.listen(port, () => 
  console.log(`Example app listening at port http://localhost:${port}`));
