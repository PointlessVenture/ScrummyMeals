const {Resources} = require('../modules/resources.mjs');
const {Character} = require('../modules/character.mjs');
const {berate, readSlides, skimSlides, explain, explainSlides, reiterate, readNotes, helpStudents, relax, drink, allowAnyone, assignGroups, splitClass, joke, getAttention, ignore, yellAttention, tangent, explainNormal, basicExplanation, inDepthExplanation, dontExplain, yellLate, ignoreLate, slyComment, overexplain, hardExplanation, summarize, tellToRead, ignoreDisruption} = require("../modules/actions.mjs");

test('Berate', () => {
    const resourcesTest = new Resources(50);
    const resourcesExpected = new Resources(50);
    const teacher = new Character("test", "test", "test");

    resourcesExpected.StudentHappiness -= 5;
    resourcesExpected.TeacherSanity += 10;

    berate(resourcesTest, teacher);

    expect(JSON.stringify(resourcesTest)).toMatch(JSON.stringify(resourcesExpected));
})

test('readSlides', () => {
    const resourcesTest = new Resources(50);
    const resourcesExpected = new Resources(50);
    const teacher = new Character("test", "test", "test");

    resourcesExpected.KnowledgeImparted += 10 
    resourcesExpected.StudentEngagement -= 5;
	resourcesExpected.TeacherEngagement += 10; 
	resourcesExpected.KnowledgeImparted += 10;

    readSlides(resourcesTest, teacher);

    expect(JSON.stringify(resourcesTest)).toMatch(JSON.stringify(resourcesExpected));
})