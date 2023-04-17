const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const Expense =require('./models/Expense')
const Todo =require('./models/Todo')
const errorController = require('./controllers/error');
const sequelize = require('./util/database');

var cors = require('cors')
var jsonParser = bodyParser.json()

const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');


//const adminRoutes = require('./routes/admin');
//const shopRoutes = require('./routes/shop');
//const expenseRoutes = require('./routes/expense')
const todoRoutes = require('./routes/todo')


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(jsonParser)
//app.use('/admin', adminRoutes);
//app.use(shopRoutes);
//app.use(expenseRoutes)
app.use(todoRoutes)
app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
