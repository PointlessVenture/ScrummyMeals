const {Character} = require('../character.mjs');

const chris = new Character("Chris Bendel","./images/Chris_Bendel.jfif", "Gamer-speak");
const quips = {
    'sanity' : 'I\'ll hit you with it when you least expect it, you\'ll never know.',
    'happiness': 'Saunas are the shit.',
    'engagement': 'Don\'t judge anybody on anything unless they\'re mean.', 
}

chris.StudentHappyOffset = 1.5;
chris.StudentEngageOffset = -0.8;
chris.setQuips(quips);

module.exports = {chris};