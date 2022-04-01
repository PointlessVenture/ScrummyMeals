const {Scenario} = require('./scenario.mjs');

const stupidQuestion = new Scenario(
    "A student raises thier hand, and before you can call on them, blurts out an incredibly stupid question.",
    ["ignore", "joke", "berate", "skimSlides", "drink"],
    [
        [
            "You ignore the student's interruption. Perhaps their peers will have something relevant to say.",
            "No, Patrick, Mayonnaise is not an instrument.",
            "You ignore the disruption, Mildly frustrated that you even had to."
        ],
        [
            "You mock the student for the stupidity of their question. The class chuckles, and the student realizes how profoundly stupid that question was.",
            "You don't dignify that question with a response, instead, deftly changing the subject with a witty joke.",
            "\"What was the noise?\" You quip, not missing a beat. \"I could have sworn they didn't let service animals into the classrooms...\" Most of the class laughs."
        ],
        [
            "You shout at the student, informing them that they have no buisness being in this class if they intend to ask such foolish questions.",
            "You inform the student, in the same laid back, casual tone that you usually use, that Steve Jobs himself would be rolling over in his grave, if only the dead could hear.",
            "You waste no time in questioning the student if they got a full night's rest the night before, before checking your bag to make sure your alcohol is still where it was supposed to be."
        ],
        [
            "You briefly read the slide on screen, answering the student's stupid question in less than 5 words.",
            "You gesture to the screen. The answer, presented in bold text on the screen, lights with a heavenly aura, as the projector briefly flickers off and back on again.",
            "You read a line from the screen sarcastically, pointing out that it is bolded and italized, and perfectly answers the student's question. It even has a little arrow pointing to it."
        ],
        [
            "With a hefty sigh, You reach into your leather bag and produce a flask of your iconic Cognac, before taking an equally hefty swig to dull the pain of that question.",
            "You take a moment to grab your crystalline vial from it's case and a bottle of the finest treasured Absinthe. Taking the tiniest sip, You silently hope that this will erase the memory of that question.",
            "You pull out your steel flask and take a full swig of the Moonshine you made yesterday. You give the student a glare, hitting them with the full weight of what they do to you.",
            "You pop the top off of the Starbucks you had brought earlier. You inform the student that questions like those are the reason that you drink, and very clearly in view of everyone, add a dash of Bailey's to your coffee.",
            "You reach under your desk and produce, from the cooler you stashed under there, a Whiteclaw. You pop the top.\"Eyyy, my guy, I see you were hitting the good stuff last night too!\" You shout, taking a big drink."
        ]
    ]
);

module.exports = {stupidQuestion};