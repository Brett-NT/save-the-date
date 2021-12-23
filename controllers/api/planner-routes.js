const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Planner, User, Event, Partner, Guest } = require('../../models');
const withAuth = require('../../utils/auth');

//get all planners for specific event
router.get('/', withAuth, (req, res) => {
    Planner.findAll({
        attributes: [
            'id',
            'name',
            'role',
            'email'
        ]
    })
    .then(dbPlannerData => {
        if(!dbPlannerData) {
            res.status(404).json({ message: 'No event planners were found for this event.' });
            return;
        }
        res.json(dbPlannerData);
    })
    .catch(err => {
        console.log(err.message);res.status(500).json(err);
    });
});

//get one planner by name
router.get('/:name', withAuth, (req, res) => {
    Planner.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            "id",
            "name",
            "email"
        ]
    })
    .then(dbPlannerData => {
        if (!dbPlannerData) {
            res.status(404).json({ message: "No planner found with this id." });
            return;
        }
        res.json(dbPlannerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//create new planner
router.post('/', withAuth, (req, res) => {
    Planner.create({
        name: req.body.name,
        email: req.body.email
    })
    .then(dbPlannerData => res.json(dbPlannerData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update planner
router.put('/:id', (req, res) => {
    Planner.update(
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
    .then(dbPlannerData => {
        if (!dbPlannerData) {
            res.status(404).json({ message: 'No planner found with this id.' });
            return;
        }
        res.json(dbPlannerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//delete a planner
router.delete('/:id', (req, res) => {
    console.log('id', req.params.id);
    Event.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbPlannerData => {
        if (!dbPlannerData) {
            res.status(404).json({ message: 'No planner found with this id.' });
            return;
        }
        res.json(dbPlannerData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;