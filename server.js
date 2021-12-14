const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path'); // Is this from handlbars to allow connection from front to back-end
//npm install express-handlebars
const exphbs = require('express-handlebars');
// const hbs = exphbs.create({});
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


//for expression session, and connect-session-sequelize usage
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'BALT crew',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

//also for connect session as express session
app.use(session(sess));

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//more handlebar set up
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// end of handlebars set up

//allows to path to stylesheets ... expres.static is a middleware built in function that allows you to serve static files (ie public).
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});