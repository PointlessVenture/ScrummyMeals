const {getRandomInt} = require("./RNG.mjs");

const WIN_VALUE = 100;
const LOSS_VALUE = 0;
const KNOWLEDGE_LOSS = -20;
const BAC_LOSS = 0.25;

class Ending {

    constructor () {};

    checkStats = (stats) => {
        if (stats.StudentHappiness <= LOSS_VALUE)
            return this.happyLoss();
        if (stats.StudentSanity <= LOSS_VALUE)
            return this.sanityLoss();            
        if (stats.StudentEngagement <= LOSS_VALUE)
            return this.engagementLoss();    
        if (stats.TeacherHappiness <= LOSS_VALUE)
            return this.ThappyLoss();
        if (stats.TeacherSanity <= LOSS_VALUE)
            return this.TsanityLoss();            
        if (stats.TeacherEngagement <= LOSS_VALUE)
            return this.TengagementLoss();          
        if (stats.KnowledgeImparted <= KNOWLEDGE_LOSS)
            return this.knowledgeLoss();            
        if (stats.BloodAlchoholContent >= BAC_LOSS)
            return this.bacLoss();            
        if (stats.KnowledgeImparted >= WIN_VALUE)
            return this.knowledgeWin();
            
        return "";
    }

    happyLoss = () => {
        const text =
            "An air of violence fills the room, a students dims the lights, the projector flickers. You feel as if this may be your last moments"
            + "at Champlain. You recieve a 2 on your IDEA surveys.";

        return text;
    }

    sanityLoss = () => {
        const text =
            "You finish talking and look around the room, waiting for questions. You notice that every students eyes are glazed over; staring into the abyss. One students"
            + "is playing \"Super Auto Pets\" on his phone. You look ahead, the realization of your failure weighing upon your shouders. A student rates you as \"alright\" on RateMyProffessor.com.";
        return text;
    }

    engagementLoss = () => {
        const text =
            "The room becomes abuzz with activity. The furious sound of keyboard clacks and mouse clicks assualt your ears. You look at the nearest students computer. He is playing"
            + "CSGO in offline mode. You look at another screen. A student is playing Minesweeper. You decide to end class early today. Everyone cheers.";

        return text;
    }

    happyLossT = () => {
        const text =
            "In a fit of anger, you stomp out of the room, immediately running to Perry Hall to resign your position, effective immediately. You vow to never teach another class as long as you live.";

        return text;
    }

    sanityLossT = () => {
        const text =
            "The room starts spinning. Colors start bleeding into your field of vision as everything fades in and out of clarity. You swear you can see the face of the professors who have come before you" +
            ", mocking you. When your vision returns, you awaken in a mental facility.";
        return text;
    }

    engagementLossT = () => {
        const text =
            "You sigh. This just isn't worth it. You tell the class you're ending early, and as they shuffle out, you pull your out your favorite beverage, contemplating where it all went wrong.";

        return text;
    }

    knowledgeLoss = () => {
        const text = "A student raises their hand. You pick on them. \"What class is this again?\" they ask. It is week 7.";
        
        return text;
    }

    bacLoss = () => {
        const randInt = getRandomInt(3);

        const text = [
            "You wake up in a cart driving through the woods. \"Oh your finally awake...\" a voice says. You look around in distress. Thoughts of magic and dragons fill your mind."
            + "\"Where am I?\" you frantically ask. \"I found you wandering through the woods. Its mighty cold these days so I picked you up. We will be coming up to Quebec anytime now\"",

            "A slow beep awakens you from your sleep. You open your eyes and are blinding by a white light. \"Am I dead?\" you ask into the void. An intensly loud voice fills yours ears,"
            + "\"You are lucky to be alive. I have never seend a BAC that high before and I'm a doctor at college hospital.\" You look around the room with a grimace on your face wondering"
            + "how you get here. The doctor speaks up again \"So...this visit will be 24,630 dollars.\"",

            "Visions of debauchery flash before your eyes. You wake in your bed at home. \"How did I get here?\" you wonder. You crawl out of bed. \"Who's pants are these?\" You turn on the"
            + "local news channel WPTZ channel 5. A breaking news story is playing. \"Man steals pants from the Samuel De Champlain statue.\" An image of you flashes on the screen. You look down"
            + "and see that you are still wearing those bronze colored. You never return to the college again."
        ]

        return text[randInt];
    }

    knowledgeWin = () => {
        const text = 
            `Angels sing, trumplets blare, a light shines down from the heavens. Every student in the class has achieved a level of knowledge unknown to their tiny mortal minds.
            During the next exam no one scores below a 99%, one student miswrote their name. You recive the Edward Phelps Lyman Profforship award. You spend your bonus on some 
            new bottles of Cognac.`;

        return text;
    }
}

module.exports = {Ending};