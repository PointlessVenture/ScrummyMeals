export default class Character {
    constructor(name, image, abilityName, studentHappyOffset = 1, studentEngageOffset = 1, studentSanityOffset = 1, profHappyOffset = 1, profEngageOffset = 1, profSanityOffset = 1, knowledgeOffset = 1) {
        this.name = name;
        this.image = image;
		this.abilityName = abilityName;
        this.studentHappyOffset = studentHappyOffset;
        this.studentEngageOffset = studentEngageOffset;
        this.studentSanityOffset = studentSanityOffset;
        this.profHappyOffset = profHappyOffset;
        this.profEngageOffset = profEngageOffset;
        this.profSanityOffset = profSanityOffset;
        this.knowledgeOffset = knowledgeOffset;
    }
}