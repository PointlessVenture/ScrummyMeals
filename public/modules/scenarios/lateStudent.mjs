const {Scenario} = require('./scenario.mjs');

const lateStudent = new Scenario(
    "Despite how late it is into the lecture, a student comes in, clutching a Starbucks. How to react to this?",
    ["yellLate", "ignore", "slyComment", "overexplain"],
    [
        [
            "You shout angrily at the audacity of this pathetic student, for DARING to come in late to your critically important lecture. They feel intense shame.",
            "You berate the student aggressively for being even 1 minute late to your class, their schedule be damned."
        ],
        [
            "You continue lecturing. This student is unimportant.",
            "You keep talking, refusing to even acknowledge this student's prescence with eye contact.",
            "So, as you can see, there are a variety of assembly instructions you can use to control program flow."
        ],
        [
            "You greet the student in a way that gives the vibe that you aren't upset, just really, really dissapointed.",
            "You greet the student in a way that implies that you hate their guts. The class looks about nervously.",
            "You begin to tell your students to pull out their notebooks for a pop quiz on the material you've already taught, just to see the horror on that student's face before you call it off."
        ],
        [
            "You launch into a tirade about how education is super important. Your students have paid an exorbitant tuition just to have the privelege of being educated, and they have the Audacity. THE AUDACITY, " + 
            "to show up 30 minutes late to a class. You're incensed at their ignorance. And you point out that you even be mad if they had shown up just a few minutes late, like their time management skills are clearly not " +
            "the best but at least they are trying to show up on time, but YOU, YOU, you didn't even make an effort! You're a disgrace to this school and a disgrace to the teachers who are trying their best to help you succeed. " +
            "You disrespectful scum. When I was in college I had to walk 20 miles through the snow, uphill both ways, just to get a 20 minute lecture from an old guy in a trenchcoat that smells like pinto beans but I did it. " +
            "The students all look about nervously as you take half an hour to go on this ridiculous tirade."
        ]
    ]
);

module.exports = {lateStudent};