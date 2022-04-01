//testing scenario refactors
const scenarios = require('../modules/scenarios/scenarios.mjs');

//mock rng to always return 0;
jest.spyOn(require('../modules/random.mjs'), 'getRandomInt').mockReturnValue(0);

test('Testing conceptSlide scenario', () => {
    const scenario = scenarios.conceptSlide;
    const expectedScene = "This slide has a difficult concept on it. Perhaps it would do with some more explanation.";
    const expectedActions = ["tangent", "explainNormal", "basicExplanation", "inDepthExplanation", "dontExplain"];
    //test first options only
    const expectedResponse1 = "Rather than really explain this slide, you take a time to tell a thrilling story about how your aunt once trained a monkey to bake a casserole. The students appreciate this development in Animal Behaviorism.";
    const expectedResponse2 = "This is standard fare. A difficult topic can still be explained clearly and consisely by a skilled professor like yourself.";
    const expectedResponse3 = "You explain the concept at a surface level. The students nod with a surface understanding.";
    const expectedResponse4 = "You really give this slide the time it deserves. Your pour over every last detail, meeting each question in your students eyes before they even have time to ask it.";
    const expectedResponse5 = "You don't explain. You say not a single word. You let the slide linger on the screen for a moment, before moving on to the next. Half the students didn't even finish taking notes on it. You don't care.";

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
    expect(scenario.getOutput(3)).toMatch(expectedResponse4);
    expect(scenario.getOutput(4)).toMatch(expectedResponse5);
})

test('Testing decentQuestion scenario', () => {
    const scenario = scenarios.decentQuestion;
    const expectedScene = "While you're lecturing, a student interrupts you to ask a completely reasonable and thoughtful question. They sound genuinely confused.";
    const expectedActions = ["berate", "readSlides", "explain"];
    //test first option only
    const expectedResponse1 = "You viciously berate the student for their foolish questions, and insinuate that they bring shame upon their ancestors.";
    const expectedResponse2 = "You go back a few slides to re-read a portion from earlier, answering the student's question.";
    const expectedResponse3 = "You take the time to explain the answer to the question and make sure the class is on the same page.";

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
})

test('Testing groupQuestion scenario', () => {   
    const scenario = scenarios.groupQuestion;
    const expectedScene = "You've got a thought exercise here for the students, but you don't want to hear every student's perspective. Perhaps you could create groups?";
    const expectedActions = ["allowAnyone", "assignGroups", "splitClass"];
    //test first option only
    const expectedResponse1 = "You allow the class to group themselves up. The class seems approving of your descision to let them work with thier friends.";
    const expectedResponse2 = "You assign the groups yourself. This will guarentee the best outcomes, though they seem to dissaprove.";
    const expectedResponse3 = "You split the class by where they are seated. The groups are a little big and a lot random, but at least no one has to move.";

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
})

test('Testing hardSlide scenario', () => {   
    const scenario = scenarios.lateStudent;
    const expectedScene = "Despite how late it is into the lecture, a student comes in, clutching a Starbucks. How to react to this?";
    const expectedActions = ["yellLate", "ignore", "slyComment", "overexplain"];
    //test first option only
    const expectedResponse1 = "You shout angrily at the audacity of this pathetic student, for DARING to come in late to your critically important lecture. They feel intense shame.";
    const expectedResponse2 = "You continue lecturing. This student is unimportant.";
    const expectedResponse3 = "You greet the student in a way that gives the vibe that you aren't upset, just really, really dissapointed.";
    const expectedResponse4 = "You launch into a tirade about how education is super important. Your students have paid an exorbitant tuition just to have the privelege of being educated, and they have the Audacity. THE AUDACITY, " + 
                              "to show up 30 minutes late to a class. You're incensed at their ignorance. And you point out that you even be mad if they had shown up just a few minutes late, like their time management skills are clearly not " +
                              "the best but at least they are trying to show up on time, but YOU, YOU, you didn't even make an effort! You're a disgrace to this school and a disgrace to the teachers who are trying their best to help you succeed. " +
                              "You disrespectful scum. When I was in college I had to walk 20 miles through the snow, uphill both ways, just to get a 20 minute lecture from an old guy in a trenchcoat that smells like pinto beans but I did it. " +
                              "The students all look about nervously as you take half an hour to go on this ridiculous tirade."

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
    expect(scenario.getOutput(3)).toMatch(expectedResponse4);
})

test('Testing losingFocus scenario', () => {   
    const scenario = scenarios.losingFocus;
    const expectedScene = "You notice the students are losing focus- time to pull them back in.";
    const expectedActions = ["joke", "getAttention", "ignore", "yellAttention"];
    //test first option only
    const expectedResponse1 = "You tell a hilarious Joke about how Brian should add Java programming to the Cirriculum. Nobody really wants to program Java, but that didn't stop you before.";
    const expectedResponse2 = "You tap your hand on the desk to make a suitably loud noise, to grab the student's attention.";
    const expectedResponse3 = "The students are not paying any attention to you. You can finally have that lecture about Applescript that you really wanted to have.";
    const expectedResponse4 = "You shriek at the students angrily. All of the immediately turn and face you with a horrified expression.";

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
    expect(scenario.getOutput(3)).toMatch(expectedResponse4);
})

test('Testing lecture scenario', () => {   
    const scenario = scenarios.lecture;
    const expectedScene = "Your lecture is going off without a hitch. Seems like a good chance to impart some more knowledge.";
    const expectedActions = ["berate", "readSlides", "explain"];
    //test first option only
    const expectedResponse1 = "You start reading the slides, imparting the knowledge of the subject to the avid students.";
    const expectedResponse2 = "You go into depth about a particular slide, hoping to draw students in with an interesting topic that really is only interesting to you.";
    const expectedResponse3 = "You go quickly over the slides, saving you some trouble. These slides were probably too complicated anywho.";
    

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
})

test('Testing lullMoment scenario', () => {   
    const scenario = scenarios.lullMoment;
    const expectedScene = "You've got a spare moment while the students catch up. Time for a break.";
    const expectedActions = ["readNotes", "relax", "drink", "helpStudents"];
    //test first option only
    const expectedResponse1 = "You skim the notes you laid out for this lecture. Best to be prepared for the incoming lecture.";
    const expectedResponse2 = "You lean back in your chair and take a deep breath. Ahh.";
    const expectedResponse3 = "You reach into your leather bag and produce a flask of your iconic Cognac, before taking a sip. Delicious.";
    const expectedResponse4 = "You look for a particularly confused student and ask if they have questions. They don't, but it still aussauges their concerns.";
    

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
    expect(scenario.getOutput(3)).toMatch(expectedResponse4);
})

test('Testing stupidQuestion scenario', () => {   
    const scenario = scenarios.stupidQuestion;
    const expectedScene = "A student raises thier hand, and before you can call on them, blurts out an incredibly stupid question.";
    const expectedActions = ["ignore", "joke", "berate", "skimSlides", "drink"];
    //test first option only
    const expectedResponse1 = "You ignore the student's interruption. Perhaps their peers will have something relevant to say.";
    const expectedResponse2 = "You mock the student for the stupidity of their question. The class chuckles, and the student realizes how profoundly stupid that question was.";
    const expectedResponse3 = "You shout at the student, informing them that they have no buisness being in this class if they intend to ask such foolish questions.";
    const expectedResponse4 = "You briefly read the slide on screen, answering the student's stupid question in less than 5 words.";
    const expectedResponse5 = "With a hefty sigh, You reach into your leather bag and produce a flask of your iconic Cognac, before taking an equally hefty swig to dull the pain of that question.";
    

    expect(scenario.getScene()).toMatch(expectedScene);
    expect(scenario.getOptions()).toEqual(expectedActions);

    expect(scenario.getOutput(0)).toMatch(expectedResponse1);
    expect(scenario.getOutput(1)).toMatch(expectedResponse2);
    expect(scenario.getOutput(2)).toMatch(expectedResponse3);
    expect(scenario.getOutput(3)).toMatch(expectedResponse4);
    expect(scenario.getOutput(4)).toMatch(expectedResponse5);
})
