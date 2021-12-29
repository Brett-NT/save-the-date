const router = require('express').Router();
const sequelize = require('../config/connection');
const { Planner, User, Partner, Event, Guest } = require('../models');


router.get('/', (req, res) => {
  console.log('======================');
  User.findAll({
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;