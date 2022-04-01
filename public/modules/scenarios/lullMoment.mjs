const {Scenario} = require('./scenario.mjs');

const lullMoment = new Scenario(
    "You've got a spare moment while the students catch up. Time for a break.",
    ["readNotes", "relax", "drink", "helpStudents"],
    [
        [
            "You skim the notes you laid out for this lecture. Best to be prepared for the incoming lecture.",
            "You're pretty sure you know this stuff back and forth, but you go over the notes for this class, one more time, just in case.",
            "You go over your notes, knowing there's a particularly difficult part coming up."
        ],
        [
            "You lean back in your chair and take a deep breath. Ahh.",
            "You take a moment to let your mind drift away. Might be time for that vacation to Bermuda.",
            "You find a student who seems ready and ask them if they caught last night's football game. They haven't, but hey, it was worth a shot."
        ],
        [
            "You reach into your leather bag and produce a flask of your iconic Cognac, before taking a sip. Delicious.",
            "You take a moment to grab your crystalline vial from it's case and a bottle of the finest treasured Absinthe. You take a moment to savor it, before taking the tiniest sip.",
            "You pull out your water bottle and take a swig of the Moonshine you made yesterday. Needs a little more yeast. Oh well.",
            "You pop the top off of the Starbucks you had brought earlier, and somewhat discreetly, add a dash of Bailey's, just to spice it up.",
            "You reach under your desk and produce, from the cooler you stashed under there, a Whiteclaw. You pop the top and chug the whole beverage in a single gulp. The class applauds."
        ],
        [
            "You look for a particularly confused student and ask if they have questions. They don't, but it still aussauges their concerns.",
            "You find a student who is typing notes with a furious pace, and explain what things they need to know, and don't need to know."
        ]
    ]
)

module.exports = {lullMoment};