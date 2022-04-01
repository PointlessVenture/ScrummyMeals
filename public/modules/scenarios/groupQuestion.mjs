const {Scenario} = require('./scenario.mjs');

const groupQuestion = new Scenario(
    "You've got a thought exercise here for the students, but you don't want to hear every student's perspective. Perhaps you could create groups?",
    ["allowAnyone", "assignGroups", "splitClass"],
    [
        [
            "You allow the class to group themselves up. The class seems approving of your descision to let them work with thier friends.",
            "You allow the class to group themselves up. Chaos breaks out in the classroom as all of the students scatter, looking for friends in far-flung corners.",
            "You allow the class to group themselves. No one moves, but they begin talking about the material, like you were all on the same page."
        ],
        [
            "You assign the groups yourself. This will guarentee the best outcomes, though they seem to dissaprove.",
            "You assign the groups yourself. You pick students based on some arbitrary metric, much to their chagrin.",
            "You've done this before, you tell students to get in the random, preset groups you had set at the start of the semester. Everyone hates those groups, but they are effective."
        ],
        [
            "You split the class by where they are seated. The groups are a little big and a lot random, but at least no one has to move.",
            "You split the class by name. The groups are even, yet very random. These people are at least somewhat used to working together at this point.",
            "You split the class by handing out cards. This makes nice even groups of 4, completely randomly."
        ]
    ]
)

module.exports = {groupQuestion};