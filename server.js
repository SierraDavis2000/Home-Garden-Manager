const path = require('path');
const express = require('express');
const routes = require('./controllers');
//  'helpers' will go here
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session'); //added by Jenna
const SequelizeStore = require('connect-session-sequelize')(session.Store); //added by Jenna

const app = express();
const PORT = process.env.PORT || 3001;

//added by Jenna
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(express.json());
app.use(express.urlencoded({ extend: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));  //added by Jenna
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});
