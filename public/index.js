/*
 * js imports *allegedly* only work when using something like
 * like nodejs or another webserver deally so I moved everything
 * to here. we can always switch to node or something later, its
 * not that complicated.
*/

import Resources from "./modules/resources.mjs"
import Character from "./modules/character.mjs"

//move both of these to game loop once we finalize it
//Example gamestats
let gameStats = new Resources(50);
// Character Choices
const frank = new Character("Frank Canovatchel", "Blunt Delivery", -1);
const brian = new Character("Brian Hall", "Hard but fun", 1.2, 1, 0.8);
const david = new Character("David Kopec", "Generalist", 1.1, 1.1, 1.1);
const murat = new Character("Murat Gungor", "MiC 308", 1.5, 0.5);
const dean = new Character("Dean Lawson", "Unexplained", 1.2, 1.2, 0.5);
const chris = new Character("Chris Bendel", "Gamer-speak", 1.5, -0.8);
const brent = new Character("Brent Sitterly", "Oblivious", 0.5, 0.5, 0.5, 2.0, 2.0, 2.0);
const wei = new Character("Wei Chen", "Coding Standard", 1, 1.5, 0.5);
const warren = new Character("Warren Sides", "Math!", 1, 1, 1.5, 1, 1, 1, 0.75);

//Current Character
var currentProffessor = frank;

//Handles the onclick events from the button
const handleAction = (action) => {
    action(gameStats, currentProffessor);
    loadStats();
}

const changeProffessor = (proffessor) => {
    //action(gameStats, currentProffessor)
    currentProffessor = proffessor;
}

//Function to refresh stats
//kinda janky may find a way to improve later
const loadStats = () => {
    let stats = document.getElementById("stats");
    stats.innerHTML = 
          "<p id='sHap'>Student Happiness = " + gameStats.StudentHappiness + "</p>"
        + "<p id='sSan'>Student Sanity = " + gameStats.StudentSanity + "</p>"
        + "<p id='sEng'>Student Engagement = " + gameStats.StudentEngagement + "</p>"
        + "<p id='tHap'>Teacher Happiness = " + gameStats.TeacherHappiness + "</p>"
        + "<p id='tSan'>Teacher Sanity = " + gameStats.TeacherSanity + "</p>"
        + "<p id='tEng'>Teacher Engagement = " + gameStats.TeacherEngagement + "</p>"
        + "<p id='kI'>Knowledge Imparted = " + gameStats.KnowledgeImparted + "</p>"
        + "<p id='BAC'>BAC = " + gameStats.BloodAlchoholContent + "</p>";
}

//loads stats when page loads
window.addEventListener('DOMContentLoaded', (event) => {
    loadStats();
});

window.handleAction = handleAction; 
window.handleAction = changeProffessor;
