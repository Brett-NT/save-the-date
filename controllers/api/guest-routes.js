const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Planner, User, Event, Partner, Guest } = require('../../models');
const withAuth = require('../../utils/auth');

//get all guestss for the specific event
router.get('/', withAuth, (req, res) => {
    Guest.findAll({
        where: {
            event_id: req.params.event_id
        },
        attributes: [
            'id',
            'name',
            'email',
            'attending'
        ]
    }).then(dbGuestData => {
        if (!dbGuestData) {
            res.status(404).json({ message: 'No guests were found for this event.' });
            return;
        }
        res.json(dbGuestData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one guest by id
router.get('/:id', withAuth, (req, res) => {
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

//create new guest
router.post('/', withAuth, (req, res) => {
    Guest.create({
        name: req.body.name,
        email: req.body.email,
        attending: req.body.attending,
        event_id: req.body.event_id
    })
    .then(dbGuestData => res.json(dbGuestData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update guest
router.put('/:id', withAuth, (req, res) => {
    Guest.update(
        {
            name: req.body.name,
            email: req.body.email,
            attending: req.body.attending
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbGuestData => {
        if (!dbGuestData) {
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
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Guest.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbGuestData => {
        if (!dbGuestData) {
            res.status(404).json({ message: 'No guest found with this id.' });
            return;
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;