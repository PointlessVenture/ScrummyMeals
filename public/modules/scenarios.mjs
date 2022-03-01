import Resources from "resources.mjs"
import Character from "character.mjs"

export default class Scenario
{
    constructor(OptionCount, Scene, Options, OptionOutputs)
    {
        this.OptionCount = OptionCount;
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
var OptionOutputs;

SceneString = "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused."
Options = ["berate", "readSlides", "explain"]
OptionOutput1 = "You viciously berate the student for thier foolish questions, and insinuate that they bring shame upon thier ancestors."
OptionOutput2 = "You go back a few slides to re-read a portion from earlier, answering the student's question."
OptionOutput3 = "You take the time to explain the answer to the question and make sure the class is on the same page."
OptionOutputs = [OptionOutput1, OptionOutput2, OptionOutput3]


export const StudentDecentQuestion = new Scenario(3,SceneString, Options, OptionOutputs)
