const router = require('express').Router();
const { User, Planner, Partner, Guest, Event } = require('../../models');

// Get all of the partners
router.get('/', (req, res) => {
    Partner.findAll({
        attributes: [
            'id',
            'name',
            'email',
            'phone_number',
            'event_id'
        ]
    }).then(dbPartnerData => res.json(dbPartnerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Get one partner
router.get('/:id', (req, res) => {
    Partner.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'name',
            'email',
            'phone_number',
            'event_id'
        ]
    })  .then(dbPartnerData => {
        if (!dbPartnerData) {
            res.status(404).json({ message: 'No partner was found with this id.' });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//Add another partner
router.post('/', (req, res) => {
    Partner.create({
        name: req.body.name,
    }) .then(dbPartnerData => res.json(dbPartnerData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

//update partner
router.put('/:id', (req, res) => {
    Partner.update(
        {
            name: req.body.name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )  .then(dbPartnerData => {
        if(!dbPartnerData) {
            res.status(404).json({ message: 'No partner was found with this id.' });
            return;
        }
        res.json(dbPartnerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete an partner
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Partner.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPartnerData => {
        if(!dbPartnerData) {
            res.status(404).json({ message: 'No partner was found with this id.' });
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