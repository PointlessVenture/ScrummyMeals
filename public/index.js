/*
 * js imports *allegedly* only work when using something like
 * like nodejs or another webserver deally so I moved everything
 * to here. we can always switch to node or something later, its
 * not that complicated.
*/

import Resources from "./modules/resources.mjs"
import Character from "./modules/character.mjs"
import {StudentDecentQuestion, StandardLecture, LullMoment} from "./modules/scenarios.mjs";
import {getRandomInt} from "./modules/RNG.mjs";
import Ending from "./modules/ending.mjs";


//Default Gamestate
let gameStats = new Resources(50);
const ending = new Ending();

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

const sceneList = [StudentDecentQuestion, StandardLecture, LullMoment];

//Current Character
var currentProffessor;
var fname;
var lname;

//Handles the onclick events from the button
const handleAction = (action) => {
    action(gameStats, currentProffessor);
    loadStats();
    SetScene(sceneList[getRandomInt(sceneList.length)])
    checkWin(gameStats);
}

const checkWin = (stats) => {
    const result = ending.checkStats(stats);
    var modal = document.getElementById("modal");
    var words = document.getElementById("modalWords");

    if (result != "") {
        modal.style.display = "block";
        var inner = `<p>${result}</p>`
        modal.innerHTML = `<div class=modal-content>${inner}</div>`;
    }
    
    console.log(result);
}

const changeProffessor = (proffessor) => {
    loadStats();
    //action(gameStats, currentProffessor)
    currentProffessor = proffessor;
    fname = proffessor.name.split(' ')[0];
    lname = proffessor.name.split(' ')[1];
    document.getElementById("middle").innerHTML = 
        "<link rel='stylesheet' href='./styling/game.css'>"
        + `<div class='box' id='middleItems'><div id='topTextBox'><p>Playing as ${fname} "${proffessor.abilityName}" ${lname}</p></div>`
        + "<div id='bottomTextBox'><button onClick=loadTeachers()>Change Teacher</div></div></div>"
    //set random scene
    SetScene();
}

const SetScene = () => {
    var randInt = getRandomInt(sceneList.length);
    var scenario = sceneList[randInt];

    var scene = document.getElementById('topic');
    var buttons = document.getElementById('buttons');
    
    scene.innerHTML = "<p>Scene:</p>" + scenario.scene;
    buttons.innerHTML = "<p>Actions:</p>";
    for(let i = 0; i < scenario.options.length; i++) {
        var option = scenario.options[i];
        buttons.innerHTML += 
            `<button onClick=handleAction(${option});handleOutputs(${randInt},${i})>${option}</button>`;
    }
}

const handleOutputs = (scene, choice) => {
    var textBox = document.getElementById("topTextBox");
    var outputs = sceneList[scene].optionOutputs[choice]
    textBox.innerHTML = `<p>Playing as ${fname} "${currentProffessor.abilityName}" ${lname}` + `<p>${outputs[getRandomInt(outputs.length)]}</p>`;
}

//Function to refresh stats
//kinda janky may find a way to improve later
const loadStats = () => {
    let stats = document.getElementById("stats");
    stats.innerHTML = 
          "<p id='sHap'>Student Happiness: " + parseFloat(gameStats.StudentHappiness).toFixed(0) + "</p>"
        + "<p id='sSan'>Student Sanity: " + parseFloat(gameStats.StudentSanity).toFixed(0) + "</p>"
        + "<p id='sEng'>Student Engagement: " + parseFloat(gameStats.StudentEngagement).toFixed(0) + "</p>"
        + "<p id='tHap'>Teacher Happiness: " + parseFloat(gameStats.TeacherHappiness).toFixed(0) + "</p>"
        + "<p id='tSan'>Teacher Sanity: " + parseFloat(gameStats.TeacherSanity).toFixed(0) + "</p>"
        + "<p id='tEng'>Teacher Engagement: " + parseFloat(gameStats.TeacherEngagement).toFixed(0) + "</p>"
        + "<p id='kI'>Knowledge Imparted: " + parseFloat(gameStats.KnowledgeImparted).toFixed(0) + "</p>"
        + "<p id='BAC'>BAC: " + parseFloat(gameStats.BloodAlchoholContent).toFixed(2) + "</p>";
}

const loadTeachers = () => {
    let textbox = document.getElementById("middle");
    textbox.innerHTML = "";
    
    var stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', './styling/chooseProfessor.css')
    textbox.append(stylesheet);

    var middleItems = document.createElement('div');
    middleItems.setAttribute('id', 'middleItems');

    var topText = document.createElement('div');
    topText.setAttribute('id', 'topTextBox');
    middleItems.append(topText);

    for(let teacher of teachers) {        
        var fName = teacher.name.split(' ')[0];
        var lName = teacher.name.split(' ')[1];
        
        var object = document.createElement("div");
        object.setAttribute('class', 'professorImages');

        object.innerHTML =`<p>${fName} "${teacher.abilityName}" ${lName}` 
        + `</p><img src="${teacher.image }" alt="${teacher.abilityName}"></div>`;

        object.onclick = function () {
            changeProffessor(teacher);
        }

        topText.append(object);
    }
    textbox.append(middleItems);
}

//loads stats when page loads
window.addEventListener('DOMContentLoaded', (event) => {
    loadTeachers();

    var close = document.getElementById("restart");
    close.onClick = () => {
        location.reload();
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            location.reload();
        }
    }
});




window.handleAction = handleAction;
window.handleOutputs = handleOutputs;
window.loadTeachers = loadTeachers;
