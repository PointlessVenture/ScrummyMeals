import Resources from "resources.mjs"
import Character from "character.mjs"

export default class Scenario
{
    constructor(Scene, Options, OptionOutputs)
    {
        this.Scene = Scene;
        this.Options = Options;
        this.OptionOutputs = OptionOutputs;
    }
} 

var SceneString;
var OptionOutput1;
var OptionOutput2;
var OptionOutput3;
var Options;
var Option1Outputs;
var Option2Outputs;
var Option3Outputs;
var AllOptionOutputs;


SceneString = "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused."
Options = ["berate", "readSlides", "explain"]
OptionOutput1 = "You viciously berate the student for thier foolish questions, and insinuate that they bring shame upon thier ancestors."
OptionOutput2 = "You berate the student, in a sarcastic, yet slightly charming way that makes them laugh nervously."
OptionOutput3 = "You berate the student in a way that gives the vibe that you aren't upset, just really, really dissapointed."
Option1Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You go back a few slides to re-read a portion from earlier, answering the student's question."
OptionOutput2 = "You go back a few slides to re-read a portion from earlier, answering the student's question."
OptionOutput3 = "You go back a few slides to re-read a portion from earlier, answering the student's question."
Option2Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You take the time to explain the answer to the question and make sure the class is on the same page."
OptionOutput2 = "You take the time to explain the answer to the question and make sure the class is on the same page."
OptionOutput3 = "You take the time to explain the answer to the question and make sure the class is on the same page."
Option3Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

export const StudentDecentQuestion = new Scenario(SceneString, Options, OptionOutputs)
