const {Character} = require('../character.mjs');

const frank = new Character("Frank Canovatchel","./images/canovatchel_frank.jpg",  "Blunt Delivery", );
const quips = {
    'sanity' : 'They can only fire me once.',
    'happiness': 'Im dumber than a pile of rocks.',
    'engagement': 'Stay away from Seinfeld when to comes to relational databases and systems.', 
}

frank.StudentHappyOffset = -1;
frank.setQuips(quips);

module.exports = {frank};