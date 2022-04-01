const {Scenario} = require('./scenario.mjs');

const lecture = new Scenario(
    "Your lecture is going off without a hitch. Seems like a good chance to impart some more knowledge.",
    ["berate", "readSlides", "explain"],
    [
        [
            "You start reading the slides, imparting the knowledge of the subject to the avid students.",
            "You pour over the slides, making sure students get each piece of information they need.",
            "You give a standard lecture, going point to point, just as you rehearsed."
        ],
        [
            "You go into depth about a particular slide, hoping to draw students in with an interesting topic that really is only interesting to you.",
            "You explain the slide in terrifying depth, and the students subconsiously fear if any of this stuff will be on the test.",
            "You explain a point, clearly and carefully, fleshing out every single detail so that there may be no confusion."
        ],
        [
            "You go quickly over the slides, saving you some trouble. These slides were probably too complicated anywho.",
            "You speed over the slides, just to make sure you have enough time to finish this lecture. Hopefully.",
            "You go through the slides quickly, telling students on the essentials that they need."
        ]
    ]
);

module.exports = {lecture};