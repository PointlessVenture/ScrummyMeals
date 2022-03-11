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
var Option4Outputs;
var Option5Outputs;
var AllOptionOutputs;


SceneString = "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused."
Options = ["berate", "readSlides", "explain"]
Option1Outputs = [
"You viciously berate the student for their foolish questions, and insinuate that they bring shame upon their ancestors.",
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
"You reach into your leather bag and produce a flask of your iconic Cognac, before taking a sip. Delicious.",
"You take a moment to grab your crystalline vial from it's case and a bottle of the finest treasured Absinthe. You take a moment to savor it, before taking the tiniest sip.",
"You pull out your water bottle and take a swig of the Moonshine you made yesterday. Needs a little more yeast. Oh well.",
"You pop the top off of the Starbucks you had brought earlier, and somewhat discreetly, add a dash of Bailey's, just to spice it up.",
"You reach under your desk and produce, from the cooler you stashed under there, a Whiteclaw. You pop the top and chug the whole beverage in a single gulp. The class applauds."]
Option4Outputs = [
"You look for a particularly confused student and ask if they have questions. They don't, but it still aussauges their concerns.",
"You find a student who is typing notes with a furious pace, and explain what things they need to know, and don't need to know."
]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs]
const LullMoment = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You notice the students are losing focus- time to pull them back in."
Options =  ["joke", "getAttention", "ignore", "yellAttention"]
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
Option4Outputs = [
"You shriek at the students angrily. All of the immediately turn and face you with a horrified expression.",
"You let out a bloodcurdling scream. Every student slowly to you in horror. A flock of birds takes off from a nearby tree. Students in the hallway flee in terror.",
"You yell decently loud, and get the attention of the class.",
"You loose a barbaric yawp, shouting to the class to pursue glory and honor! The students are briefly confused, but you have their attention."]

AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs]
const LosingFocus = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "Despite how late it is into the lecture, a student comes in, clutching a Starbucks. How to react to this?"
Options =  ["yellLate", "ignore", "slyComment", "overexplain"]
Option1Outputs = [
"You shout angrily at the audacity of this pathetic student, for DARING to come in late to your critically important lecture. They feel intense shame.",
"You berate the student aggressively for being even 1 minute late to your class, their schedule be damned.",]
Option2Outputs = [
"You continue lecturing. This student is unimportant.",
"You keep talking, refusing to even acknowledge this student's prescence with eye contact.",
"So, as you can see, there are a variety of assembly instructions you can use to control program flow."]
Option3Outputs = [
"You greet the student in a way that gives the vibe that you aren't upset, just really, really dissapointed.",
"You greet the student in a way that implies that you hate their guts. The class looks about nervously.",
"You begin to tell your students to pull out their notebooks for a pop quiz on the material you've already taught, just to see the horror on that student's face before you call it off."]
Option4Outputs = [
"You launch into a tirade about how education is super important. Your students have paid an exorbitant tuition just to have the privelege of being educated, and they have the Audacity. THE AUDACITY, " + 
"to show up 30 minutes late to a class. You're incensed at their ignorance. And you point out that you even be mad if they had shown up just a few minutes late, like their time management skills are clearly not " +
"the best but at least they are trying to show up on time, but YOU, YOU, you didn't even make an effort! You're a disgrace to this school and a disgrace to the teachers who are trying their best to help you succeed. " +
"You disrespectful scum. When I was in college I had to walk 20 miles through the snow, uphill both ways, just to get a 20 minute lecture from an old guy in a trenchcoat that smells like pinto beans but I did it. " +
"The students all look about nervously as you take half an hour to go on this ridiculous tirade."
]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs]
const LateStudent = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "This slide has a difficult concept on it. Perhaps it would do with some more explanation."
Options =  ["tangent", "explainNormal", "basicExplanation", "inDepthExplanation", "dontExplain"]
Option1Outputs = [
"Rather than really explain this slide, you take a time to tell a thrilling story about how your aunt once trained a monkey to bake a casserole. The students appreciate this development in Animal Behaviorism.",
"As you start to explain this slide, you feel it's important enough to go over how this could tie into the general flow of buisness administration, to prepare your students for the real world. You begin to tell the students eveything they need to know.",
"This slide is long, but it's not really important. It's much more important that you know all about Richard Stallman's personal life, and how he once fended off a group of highly-trained Microsoft assassins with the power of open source software, and the power of his sick katanas."]
Option2Outputs = [
"This is standard fare. A difficult topic can still be explained clearly and consisely by a skilled professor like yourself.",
"You explain this topic in your standard way, valuing the established flow of the lecture, perhaps with just a bit of extra emphasis.",
"You explain in the way that your students are used to. The students understand for the most part."]
Option3Outputs = [
"You explain the concept at a surface level. The students nod with a surface understanding.",
"You gloss over the concept. It's really just in there because the curriculum requires it anyway, and it's just gonna be one question on the test. No big deal.",
"You skim over this concept, like that one lizard skims over the surface of the water. It's a graceful, insightful maneuver that leaves students a bit bewildered."]
Option4Outputs = [
"You really give this slide the time it deserves. Your pour over every last detail, meeting each question in your students eyes before they even have time to ask it.",
"You explain this slide completely, making sure every piece of information your students could possibly need to know is covered and understood in full.",
"You talk about every scrap of information this slide has to offer, and you even throw in, as a bonus, how your students can tie the information on this slide into thier professional lives."]
Option5Outputs = [
"You don't explain. You say not a single word. You let the slide linger on the screen for a moment, before moving on to the next. Half the students didn't even finish taking notes on it. You don't care.",
"Explanations are for suckers. You read off the points and move on rapidly. You ignore the students raising thier hands. Who cares? Certainly not you.",
"You bring up this slide, before taking a seat in your chair. You stare at the class. The class stares at you. This is a normal slide. You stare at the class. They stare back. This is hell."
]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs]
const ConceptSlide = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You've got a thought exercise here for the students, but you don't want to hear every student's perspective. Perhaps you could create groups?"
Options = ["allowAnyone", "assignGroups", "splitClass"]
Option1Outputs = [
"You allow the class to group themselves up. The class seems approving of your descision to let them work with thier friends.",
"You allow the class to group themselves up. Chaos breaks out in the classroom as all of the students scatter, looking for friends in far-flung corners.",
"You allow the class to group themselves. No one moves, but they begin talking about the material, like you were all on the same page."]
Option2Outputs = [
"You assign the groups yourself. This will guarentee the best outcomes, though they seem to dissaprove.",
"You assign the groups yourself. You pick students based on some arbitrary metric, much to their chagrin.",
"You've done this before, you tell students to get in the random, preset groups you had set at the start of the semester. Everyone hates those groups, but they are effective."]
Option3Outputs = [
"You split the class by where they are seated. The groups are a little big and a lot random, but at least no one has to move.",
"You split the class by name. The groups are even, yet very random. These people are at least somewhat used to working together at this point.",
"You split the class by handing out cards. This makes nice even groups of 4, completely randomly."]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]
const GroupQuestion = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "A student raises thier hand, and before you can call on them, blurts out an incredibly stupid question."
Options = ["ignoreDisruption", "joke", "berate", "skimSlides", "drink"]
Option1Outputs = [
"You ignore the student's interruption. Perhaps their peers will have something relevant to say.",
"No, Patrick, Mayonnaise is not an instrument.",
"You ignore the disruption, Mildly frustrated that you even had to."]
Option2Outputs = [
"You mock the student for the stupidity of their question. The class chuckles, and the student realizes how profoundly stupid that question was.",
"You don't dignify that question with a response, instead, deftly changing the subject with a witty joke.",
"\"What was the noise?\" You quip, not missing a beat. \"I could have sworn they didn't let service animals into the classrooms...\" Most of the class laughs."]
Option3Outputs = [
"You shout at the student, informing them that they have no buisness being in this class if they intend to ask such foolish questions.",
"You inform the student, in the same laid back, casual tone that you usually use, that Steve Jobs himself would be rolling over in his grave, if only the dead could hear.",
"You waste no time in questioning the student if they got a full night's rest the night before, before checking your bag to make sure your alcohol is still where it was supposed to be."]
Option4Outputs = [
"You briefly read the slide on screen, answering the student's stupid question in less than 5 words.",
"You gesture to the screen. The answer, presented in bold text on the screen, lights with a heavenly aura, as the projector briefly flickers off and back on again.",
"You read a line from the screen sarcastically, pointing out that it is bolded and italized, and perfectly answers the student's question. It even has a little arrow pointing to it."]
Option5Outputs = [
"With a hefty sigh, You reach into your leather bag and produce a flask of your iconic Cognac, before taking an equally hefty swig to dull the pain of that question.",
"You take a moment to grab your crystalline vial from it's case and a bottle of the finest treasured Absinthe. Taking the tiniest sip, You silently hope that this will erase the memory of that question.",
"You pull out your steel flask and take a full swig of the Moonshine you made yesterday. You give the student a glare, hitting them with the full weight of what they do to you.",
"You pop the top off of the Starbucks you had brought earlier. You inform the student that questions like those are the reason that you drink, and very clearly in view of everyone, add a dash of Bailey's to your coffee.",
"You reach under your desk and produce, from the cooler you stashed under there, a Whiteclaw. You pop the top.\"Eyyy, my guy, I see you were hitting the good stuff last night too!\" You shout, taking a big drink."]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs, Option4Outputs, Option5Outputs]
const StupidQuestion = new Scenario(SceneString, Options, AllOptionOutputs)

SceneString = "You've put a slide in with a concept that is quite hard to understand. Time for some explanation."
Options = ["hardExplanation", "summarize", "tellToRead"]
Option1Outputs = [
"Without wasting time, you deep-dive into the topic at hand, iterating your point over and over, like a nested for loop, until the difficult concept is safely drilled into student's heads.",
"You begin to explain in great detail, making sure the students take this tricky bit of knowledge to heart.",
"You lecture with aplomb, covering the whiteboard in scrawls of formulas and extensive notes. The Lecture is draining, but effective."]
Option2Outputs = [
"You summarize the difficult concept. The students don't learn as much, but some noticably sigh with relief as you skip large swaths of small text.",
"For the sake of your students, you summarize, hitting the key points the students need to know.",
"Even made brief, this lecture is still draining, but at least this way it's tolerable."]
Option3Outputs = [
"You tell the students to read the slide. The whole class groans in unison and sets to work reading the slide, complete with it's 12 point font. Most don't bother.",
"You tell the students to read the slide, sitting back in your chair as you watch your subjects slave over the board, helplessly coping the copious text.",
"As you tell the students to read the slide, One student offers to read the slide aloud for those in the back. They are not a good orator, but hey, at least you didn't have to read it."]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

const HardSlide = new Scenario(SceneString, Options, AllOptionOutputs)

export {StudentDecentQuestion, StandardLecture, LullMoment, LosingFocus, LateStudent, ConceptSlide, GroupQuestion, StupidQuestion, HardSlide}

/*
SceneString = ""
Options = ["", "", ""]
Option1Outputs = [
"",
"",
""]
Option2Outputs = [
"",
"",
""]
Option3Outputs = [
"",
"",
""]
AllOptionOutputs = [Option1Outputs, Option2Outputs, Option3Outputs]

const Template = new Scenario(SceneString, Options, AllOptionOutputs)
*/
