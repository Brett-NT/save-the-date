const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Event, User, Guest, Partner, Planner } = require('../../models');

//get all events
router.get('/', (req, res) => {
    Event.findAll({
        attributes: [
            'id',
            'event_name',
            'date'
        ]
    })
    .then(dbEventData => res.json(dbEventData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one event by id
router.get('/:id', (req, res) => {
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'event_name',
            'date'
        ]
    })
    .then(dbEventData => {
        if(!dbEventData) {
            res.status(404).json({ message: 'No event found with that id.'});
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
router.post('/', (req, res) => {
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

//update event_name
router.put('/:id', (req, res) => {
    Event.update(
        {
            event_name: req.body.event_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbEventData => {
        if(!dbEventData) {
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
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbEventData => {
        if(!dbEventData) {
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