const router = require('express').Router();
let Drink = require('../models/drink.model');

router.route('/').get((req, res) => {
  Drink.find()
    .then(drinks => res.json(drinks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = Date.parse(req.body.date);

  const newDrink = new Drink({
    username,
    description,
    amount,
    date,
  });

  newDrink.save()
  .then(() => res.json('Drink added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Drink.findById(req.params.id)
    .then(drink => res.json(drink))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Drink.findByIdAndDelete(req.params.id)
    .then(() => res.json('Drink deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Drink.findById(req.params.id)
    .then(drink => {
      drink.username = req.body.username;
      drink.description = req.body.description;
      drink.amount = Number(req.body.amount);
      drink.date = Date.parse(req.body.date);

      drink.save()
        .then(() => res.json('Drink updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;