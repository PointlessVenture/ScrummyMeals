const {calcTotalScore} = require("../modules/totalScore.mjs");
const {Resources} = require("../modules/resources.mjs");

test('test total score positive negative', () => {  
    const resources = new Resources(30);
    resources.StudentSanity -= 10

    const expected = 130;
    const observed = calcTotalScore(resources);

    expect(observed).toBe(expected)
})


test('test total score positive', () => {    
    const resources = new Resources(30);
    resources.KnowledgeImparted += 10

    const expected = 190;
    const observed = calcTotalScore(resources);

    expect(observed).toBe(expected)
})

test('test total score bac', () => {  
    const resources = new Resources(50);

    resources.BloodAlchoholContent += .10;
    const expected = 270;
    const observed = calcTotalScore(resources);

    expect(observed).toBe(expected)
})