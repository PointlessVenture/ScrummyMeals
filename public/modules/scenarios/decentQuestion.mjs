const Scenario = require("scenario.mjs");

SceneString = 
Options = 

AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

const decentQuestion = new Scenario(
    "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused.",
    ["berate", "readSlides", "explain"],
    [
        [
            "You viciously berate the student for their foolish questions, and insinuate that they bring shame upon their ancestors.",
            "You berate the student, in a sarcastic, yet slightly charming way that makes them laugh nervously.",
            "You berate the student in a way that gives the vibe that you aren't upset, just really, really dissapointed."
        ],
        [
            "You go back a few slides to re-read a portion from earlier, answering the student's question.",
            "You explain, carefully, that you'll get to that in a moment. As you read, the student's question is handly answered."
        ],
        [
            "You take the time to explain the answer to the question and make sure the class is on the same page.",
            "You explain the answer in great detail. Its probably more detail than your students will ever need, but hey, it's there.",
            "You take time to explain that that particular question is beyond the scope of the course, and thus the student will not need to worry about it."
        ]
    ]
)

const StudentDecentQuestion = new Scenario(SceneString, Options, AllOptionOutputs)