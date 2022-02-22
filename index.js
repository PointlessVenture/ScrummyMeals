
class resources
{
    StudentHappiness = 0;
    StudentSanity = 0;
    StudentEngagement = 0;

    TeacherHappiness = 0;
    TeacherSanity = 0;
    TeacherEngagement = 0;

    KnowledgeImparted = 0;
    BloodAlchoholContent = 0;
}

class Character {
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
