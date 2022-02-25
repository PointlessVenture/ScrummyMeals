/*
 * js imports *allegedly* only work when using something like
 * like nodejs or another webserver deally so I moved everything
 * to here. we can always switch to node or something later, its
 * not that complicated.
*/


class Resources
{
    constructor(baseStats) {
        this.StudentHappiness = baseStats;
        this.StudentSanity = baseStats;
        this. StudentEngagement = baseStats;

        this.TeacherHappiness = baseStats;
        this.TeacherSanity = baseStats;
        this.TeacherEngagement = baseStats;

        this.KnowledgeImparted = baseStats;
        this.BloodAlchoholContent = 0;
    }
}

class Character {
    constructor(name, studentHappyOffset = 1, studentEngageOffset = 1, studentSanityOffset = 1, profHappyOffset = 1, profEngageOffset = 1, profSanityOffset = 1, knowledgeOffset = 1) {
        this.name = name;
        this.studentHappyOffset = studentHappyOffset;
        this.studentEngageOffset = studentEngageOffset;
        this.studentSanityOffset = studentSanityOffset;
        this.profHappyOffset = profHappyOffset;
        this.profEngageOffset = profEngageOffset;
        this.profSanityOffset = profSanityOffset;
        this.knowledgeOffset = knowledgeOffset;
    }
}

//move both of these to game loop once we finalize it
//Example gamestats
let gameStats = new Resources(50);
// Example Character
const frank = new Character("Frank Canovatchel", -1);

const berate = (resource, char, multiplier = 1) =>
{
    resource.StudentHappiness += 5 * multiplier * (1 / char.studentHappyOffset);
    resource.TeacherSanity += 5 * multiplier * char.profSanityOffset;
}

const readSlides = (resource, char, multiplier = 1) =>
{
    resource.KnowledgeImparted += 5 * (multiplier * char.knowledgeOffset)
    resource.StudentEngagement -= 2 * multiplier * (1 / char.studentEngageOffset);
}

const explain = (resource, char, multiplier = 1) =>
{
    resource.StudentSanity += 5 * (multiplier * char.studentSanityOffset);
    resource.TeacherSanity -= 5 * (multiplier * char.profSanityOffset);
    resource.KnowledgeImparted += 5 * (multiplier * char.knowledgeOffset);
}

//Handles the onclick events from the button
const handleAction= (action) => {
    action(gameStats, frank);
    loadStats();
}

//Function to refresh stats
//kinda janky may find a way to improve later
const loadStats = (event) => {
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
