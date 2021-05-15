const mongoose = require('mongoose');
const yup =require('yup');
const { Schema } = mongoose;
const animalSchema = new Schema({
    name: yup.string().required(),
    count_legs: yup.number(),
    birthday: yup.date()
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;