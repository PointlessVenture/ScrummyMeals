
export class resources
{
    StudentHappiness = 50;
    StudentSanity = 50;
    StudentEngagement = 50;

    TeacherHappiness = 50;
    TeacherSanity = 50;
    TeacherEngagement = 50;

    KnowledgeImparted = 50;
    BloodAlchoholContent = 0;
}

export class Character {
    constructor(name, studentHappyOffset = 1, studentEngageOffset = 1, studentSanityOffset = 1, profHappyOffset = 1, profEngageOffset = 1, profSanityOffset = 1) {
        this.name = name;
        this.studentHappyOffset = studentHappyOffset;
        this.studentEngageOffset = studentEngageOffset;
        this.studentSanityOffset = studentSanityOffset;
        this.profHappyOffset = profHappyOffset;
        this.profEngageOffset = profEngageOffset;
        this.profSanityOffset = profSanityOffset;
    }
}

// Example Character
const Frank = new Character("Frank Canovatchel", -1);
