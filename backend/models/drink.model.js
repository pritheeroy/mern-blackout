const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;