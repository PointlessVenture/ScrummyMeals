const {Ending} = require('../modules/ending.mjs');
const {Resources} = require('../modules/resources.mjs');

const ending = new Ending();

test('Test student happiness loss', () => {
    const text = "An air of violence fills the room, a students dims the lights, the projector flickers. You feel as if this may be your last moments"
            + "at Champlain. You recieve a 2 on your IDEA surveys.";

    const resources = new Resources(50);
    resources.StudentHappiness = 0;

    let observed = ending.checkStats(resources);

    expect(observed).toMatch(text);
})

test('Test knowledge loss', () => {
    const text = "A student raises their hand. You pick on them. \"What class is this again?\" they ask. It is week 7.";

    const resources = new Resources(50);
    resources.KnowledgeImparted = -20;

    let observed = ending.checkStats(resources);

    expect(observed).toMatch(text);
})