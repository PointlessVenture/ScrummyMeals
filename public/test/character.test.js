const {Resources} = require('../modules/resources.mjs');
const {frank, chris, dave} = require('../modules/characters/characters.mjs')

test('Tests franks sanity', () => {
    const resources = new Resources(50);
    resources.TeacherSanity -= 30;
    const sanity = frank.getQuip(resources)

    expect(sanity).toMatch("They can only fire me once.")
})

test('Tests franks happiness', () => {
    const resources = new Resources(50);
    resources.TeacherHappiness -= 30;
    const happiness = frank.getQuip(resources);

    expect(happiness).toMatch("Im dumber than a pile of rocks.");
})

test('Tests frank engagement', () => {
    const resources = new Resources(50);
    resources.TeacherEngagement -= 30;
    const engagement = frank.getQuip(resources);

    expect(engagement).toMatch("Stay away from Seinfeld when to comes to relational databases and systems.");
})

test('Tests Chris quips', () => {
    const resources = new Resources(50);
    resources.TeacherSanity -= 30;
    const sanity = chris.getQuip(resources);

    expect(sanity).toMatch("I'll hit you with it when you least expect it, you'll never know."); 
})

test('Tests Chris happiness', () => {
    const resources = new Resources(50);
    resources.TeacherHappiness -= 30;
    const happiness = chris.getQuip(resources);

    expect(happiness).toMatch("Saunas are the shit.");
})

test('Tests Chris engagement', () => {
    const resources = new Resources(50);
    resources.TeacherEngagement -= 30;
    const engagement = chris.getQuip(resources);

    expect(engagement).toMatch("Don't judge anybody on anything unless they're mean.");
})

test('Tests Dave quips', () => {
    const resources = new Resources(50);
    resources.TeacherSanity -= 30;
    const sanity = dave.getQuip(resources);

    expect(sanity).toMatch("You will be in parenthesis hell."); 
})

test('Tests Dave happiness', () => {
    const resources = new Resources(50);
    resources.TeacherHappiness -= 30;
    const happiness = dave.getQuip(resources);

    expect(happiness).toMatch("Its just syntatic sugar.");
})

test('Tests Dave engagement', () => {
    const resources = new Resources(50);
    resources.TeacherEngagement -= 30;
    const engagement = dave.getQuip(resources);

    expect(engagement).toMatch("My dad brought me in to teach Mac paint. It was my first time teaching a class.");
})