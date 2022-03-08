export default class Scenario
{
    constructor(scene, options, optionOutputs)
    {
        this.scene = scene;
        this.options = options;
        this.optionOutputs = optionOutputs;
    }
} 

var SceneString;
var Options;
var Option1Outputs;
var Option2Outputs;
var Option3Outputs;
var AllOptionOutputs;


SceneString = "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused."
Options = ["berate", "readSlides", "explain"]
Option1Outputs = [
"You viciously berate the student for thier foolish questions, and insinuate that they bring shame upon thier ancestors.",
"You berate the student, in a sarcastic, yet slightly charming way that makes them laugh nervously.",
"You berate the student in a way that gives the vibe that you aren't upset, just really, really dissapointed."]
Option2Outputs = [
"You go back a few slides to re-read a portion from earlier, answering the student's question.",
"You explain, carefully, that you'll get to that in a moment. As you read, the student's question is handly answered."]
Option3Outputs = [
"You take the time to explain the answer to the question and make sure the class is on the same page.",
"You explain the answer in great detail. Its probably more detail than your students will ever need, but hey, it's there.",
"You take time to explain that that particular question is beyond the scope of the course, and thus the student will not need to worry about it."]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

const StudentDecentQuestion = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "Your lecture is going off without a hitch. Seems like a good chance to impart some more knowledge."
Options =  ["readSlides", "explainSlides", "skimSlides"]
Option1Outputs = [
"You start reading the slides, imparting the knowledge of the subject to the avid students.",
"You pour over the slides, making sure students get each piece of information they need.",
"You give a standard lecture, going point to point, just as you rehearsed."]
Option2Outputs = [
"You go into depth about a particular slide, hoping to draw students in with an interesting topic that really is only interesting to you.",
"You explain the slide in terrifying depth, and the students subconsiously fear if any of this stuff will be on the test.",
"You explain a point, clearly and carefully, fleshing out every single detail so that there may be no confusion."]
Option3Outputs = [
"You go quickly over the slides, saving you some trouble. These slides were probably too complicated anywho.",
"You speed over the slides, just to make sure you have enough time to finish this lecture. Hopefully.",
"You go through the slides quickly, telling students on the essentials that they need."]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

const StandardLecture = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You've got a spare moment while the students catch up. Time for a break."
Options =  ["readNotes", "relax", "drink", "helpStudents"]
Option1Outputs = [
"You skim the notes you laid out for this lecture. Best to be prepared for the incoming lecture.",
"You're pretty sure you know this stuff back and forth, but you go over the notes for this class, one more time, just in case.",
"You go over your notes, knowing there's a particularly difficult part coming up."]
Option2Outputs = [
"You lean back in your chair and take a deep breath. Ahh.",
"You take a moment to let your mind drift away. Might be time for that vacation to Bermuda.",
"You find a student who seems ready and ask them if they caught last night's football game. They haven't, but hey, it was worth a shot."]
Option3Outputs = [
"You reach into your leather bag and produce a flask of your treasured Cognac, before taking a sip. Delicious.",
"You take a moment to grab your crystalline vial from it's case and a bottle of the finest Absinthe. You take a moment to savor it, before taking the tiniest sip.",
"You pull out your water bottle and take a swig of the Moonshine you made yesterday. Needs a little more yeast. Oh well.",
"You pop the top off of the Starbucks you had brought earlier, and somewhat discreetly, add a dash of Bailey's, just to spice it up.",
"You reach under your desk and produce, from the cooler you stashed under there, a Whiteclaw. You pop the top and chug the whole beverage in a single gulp. The class applauds."]
Option4Outputs = [
"You look for a particularly confused student and ask if they have questions. They don't, but it still aussauges thier concerns."
]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs]
const LullMoment = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You notice the students are losing focus- time to pull them back in."
Options =  ["joke", "getAttention", "ignore"]
Option1Outputs = [
"You tell a hilarious Joke about how Brian should add Java programming to the Cirriculum. Nobody really wants to program Java, but that didn't stop you before.",
"You tell a moderately funny joke about how you should blame Duane Dunston for all of your problems. Half the class hasn't even heard of Duane but that's okay.",
"You inform your students that the technical term for the semicolon is \"Gizmo\". They laugh appropriately."]
Option2Outputs = [
"You tap your hand on the desk to make a suitably loud noise, to grab the student's attention.",
"You call on a student and ask them a question about the lecture, forcing them to pay attention.",
"You ask the students if they understand the material, and they nod appropriately. At least they are paying a little bit of attention."]
Option3Outputs = [
"The students are not paying any attention to you. You can finally have that lecture about Applescript that you really wanted to have.",
"You can tell the students are not paying attention, but hey, that's their loss. You make a mental note to make the test on this section really hard.",
"You, as a test, stop Lecturing. No one cares.",]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]
const LosingFocus = new Scenario(SceneString, Options, AllOptionOutputs)


export {StudentDecentQuestion, StandardLecture, LullMoment, LosingFocus}
