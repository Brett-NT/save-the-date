const router = require('express').Router();
const { User, Planner, Partner, Guest, Event } = require('../../models');
const sequelize = require('../../config/connection');


// Get all of the guests
router.get('/', (req, res) => {
    Guest.findAll({
        attributes: [
            'id',
            'name',
            'email',
            'attending',
            'event_id'
        ]
    })
    .then(dbGuestData => res.json(dbGuestData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get one guest
router.get('/:id', (req, res) => {
    Guest.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'email',
            'attending',
            'event_id'
        ]
    })
    .then(dbGuestData => {
        if (!dbGuestData) {
            res.status(404).json({ message: 'No guest found with this id.' });
            return;
        }
        res.json(dbGuestData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Add another guest
router.post('/', (req, res) => {
    Guest.create({
        name: req.body.name,
    }) .then(dbGuestData => res.json(dbGuestData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//update guest name
router.put('/:id', (req, res) => {
    Guest.update({
            name: req.body.name
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbGuestData => {
        if(!dbGuestData) {
            res.status(404).json({ message: 'No guest was found with this id.' });
            return;
        }
        res.json(dbGuestData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete a guest
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Guest.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGuestData => {
        if(!dbGuestData) {
            res.status(404).json({ message: 'No guest was found with this id.' });
            return;
        }
        res.json(dbGuestData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;