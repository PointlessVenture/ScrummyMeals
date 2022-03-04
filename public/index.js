/*
 * js imports *allegedly* only work when using something like
 * like nodejs or another webserver deally so I moved everything
 * to here. we can always switch to node or something later, its
 * not that complicated.
*/

import Resources from "./modules/resources.mjs"
import Character from "./modules/character.mjs"
import { StudentDecentQuestion } from "./modules/scenarios.mjs";

//move both of these to game loop once we finalize it
//Example gamestats
let gameStats = new Resources(50);
// Character Choices

const teachers = [];
teachers.push(new Character("Frank Canovatchel","./images/canovatchel_frank.jpg",  "Blunt Delivery", -1));
teachers.push(new Character("Brian Hall","./images/hall_brian.jpg", "Hard but fun", 1.2, 1, 0.8));
teachers.push(new Character("David Kopec","./images/DavidKopec.jpg", "Generalist", 1.1, 1.1, 1.1));
teachers.push(new Character("Murat Gungor","./images/Murat-Gungor-330x330.jpg", "MiC 308", 1.5, 0.5));
teachers.push(new Character("Dean Lawson","./images/lawson_dean.jpg", "Unexplained", 1.2, 1.2, 0.5));
teachers.push(new Character("Chris Bendel","./images/Chris_Bendel.jfif", "Gamer-speak", 1.5, -0.8));
teachers.push(new Character("Brent Sitterly","./images/Brent_Sitterly.jfif", "Oblivious", 0.5, 0.5, 0.5, 2.0, 2.0, 2.0));
teachers.push(new Character("Wei Chen","./images/chen_wei.jpg", "Coding Standard", 1, 1.5, 0.5));
teachers.push(new Character("Warren Sides","./images/WarrenSides.jpg", "Math!", 1, 1, 1.5, 1, 1, 1, 0.75));

//Current Character
var currentProffessor = teachers[1];

//Handles the onclick events from the button
const handleAction = (action) => {
    action(gameStats, currentProffessor);
    loadStats();
}

const handleScenario = (action) => {
    action(gameStats, frank)
    loadStats();
    //Choose Randomly from the list of Scenarios, eventually.
    newScenario = StudentDecentQuestion
    //Get text and available actions.
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

const loadTeachers = () => {
    let textbox = document.getElementById('textBox');

    var children = "<link rel='stylesheet' href='chooseProfessor.css'>";

    for(let teacher of teachers) {
        children += "<div class='professorImages'><p>" 
        + teacher.name + "</p><img src='" + teacher.image 
        + "' alt='" + teacher.abilityName + "'></div>"
    }

    textbox.innerHTML = children;
    loadProffessorButtons();
}

const loadProffessorButtons = () => {
    let buttons = document.getElementById("teacherButtons");

    var children = "<link rel='stylesheet' href='teacherButtons.css'>";;

    for(let teacher of teachers) {
        children += "<button onClick=changeProffessor('" + teacher.name.split(' ')[0] +"')>Choose " + teacher.name + "</button>";
    }

    buttons.innerHTML=children;
}


//loads stats when page loads
window.addEventListener('DOMContentLoaded', (event) => {
    loadStats();
    loadTeachers();
});

window.handleAction = handleAction;
window.handleScenario = handleScenario;
window.changeProffessor = changeProffessor;
