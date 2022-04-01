const {Scenario} = require('./scenario.mjs');

const hardSlide = new Scenario(
    "You've put a slide in with a concept that is quite hard to understand. Time for some explanation.",
    ["hardExplanation", "summarize", "tellToRead"],
    [
        [
            "Without wasting time, you deep-dive into the topic at hand, iterating your point over and over, like a nested for loop, until the difficult concept is safely drilled into student's heads.",
            "You begin to explain in great detail, making sure the students take this tricky bit of knowledge to heart.",
            "You lecture with aplomb, covering the whiteboard in scrawls of formulas and extensive notes. The Lecture is draining, but effective."
        ],
        [
            "You summarize the difficult concept. The students don't learn as much, but some noticably sigh with relief as you skip large swaths of small text.",
            "For the sake of your students, you summarize, hitting the key points the students need to know.",
            "Even made brief, this lecture is still draining, but at least this way it's tolerable."
        ],
        [
            "You tell the students to read the slide. The whole class groans in unison and sets to work reading the slide, complete with it's 12 point font. Most don't bother.",
            "You tell the students to read the slide, sitting back in your chair as you watch your subjects slave over the board, helplessly coping the copious text.",
            "As you tell the students to read the slide, One student offers to read the slide aloud for those in the back. They are not a good orator, but hey, at least you didn't have to read it."
        ]
    ]
);

module.exports = {hardSlide};