const express = require('express')
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
// HTTP logger
const morgan = require('morgan');
const {engine} = require('express-handlebars');
// Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(morgan('combined'));
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => 
  console.log(`Example app listening at port http://localhost:${port}`));
