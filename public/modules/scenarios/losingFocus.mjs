const {Scenario} = require('./scenario.mjs');

const losingFocus = new Scenario(
    "You notice the students are losing focus- time to pull them back in.",
    ["joke", "getAttention", "ignore", "yellAttention"],
    [
        [
            "You tell a hilarious Joke about how Brian should add Java programming to the Cirriculum. Nobody really wants to program Java, but that didn't stop you before.",
            "You tell a moderately funny joke about how you should blame Duane Dunston for all of your problems. Half the class hasn't even heard of Duane but that's okay.",
            "You inform your students that the technical term for the semicolon is \"Gizmo\". They laugh appropriately."
        ],
        [
            "You tap your hand on the desk to make a suitably loud noise, to grab the student's attention.",
            "You call on a student and ask them a question about the lecture, forcing them to pay attention.",
            "You ask the students if they understand the material, and they nod appropriately. At least they are paying a little bit of attention."
        ],
        [
            "The students are not paying any attention to you. You can finally have that lecture about Applescript that you really wanted to have.",
            "You can tell the students are not paying attention, but hey, that's their loss. You make a mental note to make the test on this section really hard.",
            "You, as a test, stop Lecturing. No one cares.",
        ],
        [
            "You shriek at the students angrily. All of the immediately turn and face you with a horrified expression.",
            "You let out a bloodcurdling scream. Every student slowly to you in horror. A flock of birds takes off from a nearby tree. Students in the hallway flee in terror.",
            "You yell decently loud, and get the attention of the class.",
            "You loose a barbaric yawp, shouting to the class to pursue glory and honor! The students are briefly confused, but you have their attention."
        ]
    ]
);

module.exports = {losingFocus};