const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Planner, User, Event, Partner, Guest } = require('../../models');
const withAuth = require('../../utils/auth');

//get all Partners for specific event
router.get('/', withAuth, (req, res) => {
    Partner.findAll({
        attributes: [
            'id',
            'name',
            'role',
            'email'
        ]
    })
    .then(dbPartnerData => {
        if(!dbPartnerData) {
            res.status(404).json({ message: 'No event Partners were found for this event.' });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one Partner by name
router.get('/:name', withAuth, (req, res) => {
    Partner.findOne({
        where: {
            name: req.params.name
        },
        attributes: [
            "id",
            "name",
            "email"
        ]
    })
    .then(dbPartnerData => {
        if (!dbPartnerData) {
            res.status(404).json({ message: "No Partner found with this id." });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create new Partner
router.post('/', withAuth, (req, res) => {
    Partner.create({
        name: req.body.name,
        email: req.body.email
    })
    .then(dbPartnerData => res.json(dbPartnerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update Partner
router.put('/:id', withAuth, (req, res) => {
    Partner.update(
        {
            name: req.body.name,
            email:req.body.email
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbPartnerData => {
        if (!dbPartnerData) {
            res.status(404).json({ message: 'No Partner found with this id.' });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete a Partner
router.delete('/:id', withAuth, (req, res) => {
    console.log('id', req.params.id);
    Partner.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPartnerData => {
        if (!dbPartnerData) {
            res.status(404).json({ message: 'No Partner found with this id.' });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;