const {Scenario} = require('./scenario.mjs');

const conceptSlide = new Scenario(
    "This slide has a difficult concept on it. Perhaps it would do with some more explanation.",
    ["tangent", "explainNormal", "basicExplanation", "inDepthExplanation", "dontExplain"],
    [
        [
            "Rather than really explain this slide, you take a time to tell a thrilling story about how your aunt once trained a monkey to bake a casserole. The students appreciate this development in Animal Behaviorism.",
            "As you start to explain this slide, you feel it's important enough to go over how this could tie into the general flow of buisness administration, to prepare your students for the real world. You begin to tell the students eveything they need to know.",
            "This slide is long, but it's not really important. It's much more important that you know all about Richard Stallman's personal life, and how he once fended off a group of highly-trained Microsoft assassins with the power of open source software, and the power of his sick katanas."
        ],
        [
            "This is standard fare. A difficult topic can still be explained clearly and consisely by a skilled professor like yourself.",
            "You explain this topic in your standard way, valuing the established flow of the lecture, perhaps with just a bit of extra emphasis.",
            "You explain in the way that your students are used to. The students understand for the most part."
        ],
        [
            "You explain the concept at a surface level. The students nod with a surface understanding.",
            "You gloss over the concept. It's really just in there because the curriculum requires it anyway, and it's just gonna be one question on the test. No big deal.",
            "You skim over this concept, like that one lizard skims over the surface of the water. It's a graceful, insightful maneuver that leaves students a bit bewildered."
        ],
        [
            "You really give this slide the time it deserves. Your pour over every last detail, meeting each question in your students eyes before they even have time to ask it.",
            "You explain this slide completely, making sure every piece of information your students could possibly need to know is covered and understood in full.",
            "You talk about every scrap of information this slide has to offer, and you even throw in, as a bonus, how your students can tie the information on this slide into thier professional lives."
        ],
        [
            "You don't explain. You say not a single word. You let the slide linger on the screen for a moment, before moving on to the next. Half the students didn't even finish taking notes on it. You don't care.",
            "Explanations are for suckers. You read off the points and move on rapidly. You ignore the students raising thier hands. Who cares? Certainly not you.",
            "You bring up this slide, before taking a seat in your chair. You stare at the class. The class stares at you. This is a normal slide. You stare at the class. They stare back. This is hell."
        ]
    ]
);

module.exports = {conceptSlide};