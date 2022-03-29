class Resources
{
    constructor(baseStats) {
        this.StudentHappiness = baseStats;
        this.StudentSanity = baseStats;
        this.StudentEngagement = baseStats;

        this.TeacherHappiness = baseStats;
        this.TeacherSanity = baseStats;
        this.TeacherEngagement = baseStats;

        this.KnowledgeImparted = 0;
        this.BloodAlchoholContent = 0;
    }
}

module.exports = {Resources};