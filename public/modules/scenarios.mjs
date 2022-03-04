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
var OptionOutput4;
var OptionOutput5;
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
OptionOutput2 = "You explain, carefully, that you'll get to that in a moment. As you read, the student's question is handly answered."
Option2Outputs = [OptionOutput1, OptionOutput2]
OptionOutput1 = "You take the time to explain the answer to the question and make sure the class is on the same page."
OptionOutput2 = "You explain the answer in great detail. Its probably more detail than your students will ever need, but hey, it's there."
OptionOutput3 = "You take time to explain that that particular question is beyond the scope of the course, and thus the student will not need to worry about it."
Option3Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

StudentDecentQuestion = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "Your lecture is going off without a hitch. Seems like a good chance to impart some more knowledge."
Options =  ["readSlides", "explainSlides", "skimSlides"]
OptionOutput1 = "You start reading the slides, imparting the knowledge of the subject to the avid students."
OptionOutput2 = "You pour over the slides, making sure students get each piece of information they need."
OptionOutput3 = "You give a standard lecture, going point to point, just as you rehearsed."
Option1Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You go into depth about a particular slide, hoping to draw students in with an interesting topic that really is only interesting to you."
OptionOutput2 = "You explain the slide in terrifying depth, and the students subconsiously fear if any of this stuff will be on the test."
OptionOutput3 = "You explain a point, clearly and carefully, fleshing out every single detail so that there may be no confusion."
Option2Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You go quickly over the slides, saving you some trouble. These slides were probably too complicated anywho."
OptionOutput2 = "You speed over the slides, just to make sure you have enough time to finish this lecture. Hopefully."
OptionOutput3 = "You go through the slides quickly, telling students on the essentials that they need."
Option3Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

StandardLecture = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You've got a spare moment while the students catch up. Time for a break."
Options =  ["readNotes", "relax", "drink"]
OptionOutput1 = "You skim the notes you laid out for this lecture. Best to be prepared for the incoming lecture."
OptionOutput2 = "You're pretty sure you know this stuff back and forth, but you go over the notes for this class, one more time, just in case."
OptionOutput3 = "You go over your notes, knowing there's a particularly difficult part coming up."
Option1Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You lean back in your chair and take a deep breath. Ahh."
OptionOutput2 = "You take a moment to let your mind drift away. Might be time for that vacation to Bermuda."
OptionOutput3 = "You find a student who seems ready and ask them if they caught last night's football game. They haven't, but hey, it was worth a shot."
Option2Outputs = [OptionOutput1, OptionOutput2, OptionOutput3]
OptionOutput1 = "You reach into your leather bag and produce a flask of your treasured Cognac, before taking a sip. Delicious."
OptionOutput2 = "You take a moment to grab your crystalline vial from it's case and a bottle of the finest Absinthe. You take a moment to savor it, before taking the tiniest sip."
OptionOutput3 = "You pull out your water bottle and take a swig of the Moonshine you made yesterday. Needs a little more yeast. Oh well."
OptionOutput4 = "You pop the top off of the Starbucks you had brought earlier, and somewhat discreetly, add a dash of Bailey's, just to spice it up."
OptionOutput5 = "You reach under your desk and produce, from the cooler you stashed under there, a whiteclaw. You pop the top and chug the whole beverage in a single gulp. The class applauds."
Option3Outputs = [OptionOutput1, OptionOutput2, OptionOutput3, OptionOutput4, OptionOutput5]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

StandardLecture = new Scenario(SceneString, Options, AllOptionOutputs)

export {StudentDecentQuestion, StandardLecture}
