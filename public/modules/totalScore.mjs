const calcTotalScore = (resources) => {
        let sum = 0;

        sum += resources.StudentHappiness < 30 ? -10 : resources.StudentHappiness;
        sum += resources.StudentSanity < 30 ? -20 : resources.StudentSanity;
        sum += resources.StudentEngagement < 30 ? -30 : resources.StudentEngagement;

        sum += resources.TeacherHappiness < 30 ? -30 : resources.TeacherHappiness;
        sum += resources.TeacherSanity < 30 ? -30 : resources.TeacherSanity;
        sum += resources.TeacherEngagement < 30 ? -30 : resources.TeacherEngagement;

        sum += resources.KnowledgeImparted;

        let total = resources.BloodAlchoholContent != 0 ? sum - (sum * resources.BloodAlchoholContent) : sum;
        return total;
}

module.exports = {calcTotalScore};