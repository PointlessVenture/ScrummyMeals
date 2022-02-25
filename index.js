
class resources
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

let gameStats = new resources(50);

class Character {
    constructor(name, studentHappyOffset = 1, studentEngageOffset = 1, studentSanityOffset = 1, profHappyOffset = 1, profEngageOffset = 1, profSanityOffset = 1) {
        this.name = name;
        this.studentHappyOffset = studentHappyOffset;
        this.studentEngageOffset = studentEngageOffset;
        this.studentSanityOffset = studentSanityOffset;
        this.profHappyOffset = profHappyOffset;
        this.profEngageOffset = profEngageOffset;
        this.profSanityOffset = profSanityOffset;
    }
}

const loadStats = (event) => {
    let stats = document.getElementById("stats")
    console.log("clicked")

    console.log(gameStats.StudentEngagement)

    stats.innerHTML = 
          "<p>Student Happiness = " + gameStats.StudentHappiness + "</p>"
        + "<p>Student Sanity = " + gameStats.StudentSanity + "</p>"
        + "<p>Student Engagement = " + gameStats.StudentEngagement + "</p>"
        + "<p>Teacher Happiness = " + gameStats.TeacherHappiness + "</p>"
        + "<p>Teacher Sanity = " + gameStats.TeacherSanity + "</p>"
        + "<p>Teacher Engagement = " + gameStats.TeacherEngagement + "</p>"

        + "<p>Knowledge Imparted = " + gameStats.KnowledgeImparted + "</p>"
        + "<p>BAC = " + gameStats.BloodAlchoholContent + "</p>"
}

// Example Character
const Frank = new Character("Frank Canovatchel", -1);
