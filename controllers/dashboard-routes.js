const router = require('express').Router();
const sequelize = require('../config/connection');
const { Event, User, Planner, Partner, Guest, GuestEvents } = require('../models');
const withAuth = require('../utils/auth');

// get all Events for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Event.findAll({
    // where: {
    //   user_id: req.session.user_id
    // },
    attributes: [
      'id',
      'event_name',
      'date',
      'description',
      'planner_name',
      'planner_contact'
    ]
  })
    .then(dbEventData => {
      const Events = dbEventData.map(Event => Event.get({ plain: true }));
      res.render('dashboard', { Events, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Event.findByPk(req.params.id, {
    include: [{
      model: Guest,
      through: GuestEvents,
      as: "guest_events"
    }],
    attributes: [
      'id',
      'event_name',
      'date',
      'description',
      'planner_name',
      'planner_contact'
    ]
  })
    .then(dbEventData => {
      if (dbEventData) {
        const Events = dbEventData.get({ plain: true });
        console.log(Events);
        
        res.render('edit-event', {
          Events,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;