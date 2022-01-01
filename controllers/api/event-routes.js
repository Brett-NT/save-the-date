const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Event, User, Guest, Partner, Planner } = require('../../models');
const withAuth = require('../../utils/auth');

//get all events
router.get('/', withAuth, (req, res) => {
    Event.findAll({
        attributes: [
            'id',
            'event_name',
            'date',
            'description',
            'planner_name',
            'planner_contact'
        ]
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get one event by id
router.get('/:id', withAuth, (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'event_name',
            'date',
            'planner_name',
            'planner_contact'
        ]
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: 'No event found with that id.' });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//create new event
router.post('/', withAuth, (req, res) => {
    Event.create({
        event_name: req.body.event_name,
        date: req.body.date
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update event
router.put('/:id', withAuth, (req, res) => {
    Event.update(
        {
            event_name: req.body.event_name,
            date: req.body.date,
            description: req.body.description,
            planner_name: req.body.planner_name,
            planner_contact: req.body.planner_contact
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: 'No event found with this id.' });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//delete an event
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbEventData => {
            if (!dbEventData) {
                res.status(404).json({ message: 'No event found with this id.' });
                return;
            }
            res.json(dbEventData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;