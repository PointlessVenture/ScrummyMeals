const Actions = require("../modules/actions.mjs");
const { Character } = require("../modules/character.mjs");
const { Resources } = require("../modules/resources.mjs");
const { PreviousActions } = require("../modules/previousActions.mjs")

var previousStack = [];
const handleAction = (action) => previousStack.push(action.name);

beforeEach(() => {
    previousStack = new PreviousActions();
})

test("Test 1 action", () => {
    const expected = JSON.stringify(["berate"]);

    handleAction(Actions.berate);
    const observed = previousStack.toJSON();
    
    expect(expected).toMatch(observed);
})

test("test large stack", () => {
    const expected = JSON.stringify(["berate", "berate", "berate", "drink", "drink"]);
    
    //fill stack
    for(let i = 0; i < 5; i++) {
        handleAction(Actions.berate);
    }
    handleAction(Actions.drink);
    handleAction(Actions.drink);
    const observed = previousStack.toJSON();

    expect(expected).toMatch(observed);

})

test("empty stack", () => {
    const expected = JSON.stringify([]);
    const observed = previousStack.toJSON();

    expect(expected).toMatch(observed);
})

test("test popping and calling", () => {
    const expectedResources = new Resources(50);
    const testCharacter = new Character("test", "test", "test");
    expectedResources.StudentHappiness -= 5;
    expectedResources.TeacherSanity += 10;

    const observedResources = new Resources(50);
    handleAction(Actions.berate);
    Actions[previousStack.pop()](observedResources, testCharacter);

    expect(JSON.stringify(expectedResources)).toMatch(JSON.stringify(observedResources));
})