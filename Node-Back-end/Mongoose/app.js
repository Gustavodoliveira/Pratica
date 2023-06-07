const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/peoples');

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    Sex: String
});

const People = mongoose.model('People', peopleSchema);

const people = new People ({
    name: 'Gustavo',
    age: 18,
    Sex: 'Masc'
});

people.save();