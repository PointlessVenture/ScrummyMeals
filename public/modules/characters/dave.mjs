const {Character} = require('../character.mjs');

const dave = new Character("David Kopec","./images/DavidKopec.jpg", "Generalist");

const quips = {
    'sanity' : 'You will be in parenthesis hell.',
    'happiness': 'Its just syntatic sugar.',
    'engagement': 'My dad brought me in to teach Mac paint. It was my first time teaching a class.', 
}

dave.StudentHappyOffset = 1.1;
dave.StudentEngageOffset = 1.1;
dave.studentSanityOffset = 1.1;
dave.profHappyOffset = 0.9;
dave.profEngageOffset = 0.9;
dave.profSanityOffset = 0.9;
dave.knowledgeOffset = 1.1;
dave.setQuips(quips);

module.exports = {dave};