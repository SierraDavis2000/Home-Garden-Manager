

const path = require('path');
const express = require('express');
const routes = require('./controllers');
//  'helpers' will go here
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// 'session' will go here
// 'SequelizeStore' will go here 

const app = express();
const PORT = process.env.PORT || 3001;

// 'sess' will go here

// 'engine' will go here (for handlebars)
// set engine will go here


app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session(sess)) goes here

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});