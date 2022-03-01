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
// Example Character
const frank = new Character("Frank Canovatchel", -1);

//Handles the onclick events from the button
const handleAction = (action) => {
    action(gameStats, frank);
    loadStats();
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
