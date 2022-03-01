const berate = (resource, char, multiplier = 1) =>
{
    resource.StudentHappiness -= 5 * multiplier * (1 / char.studentHappyOffset);
    resource.TeacherSanity += 5 * multiplier * char.profSanityOffset;
}

const readSlides = (resource, char, multiplier = 1) =>
{
    resource.KnowledgeImparted += 5 * multiplier * char.knowledgeOffset
    resource.StudentEngagement -= 2 * multiplier * (1 / char.studentEngageOffset);
}

const explain = (resource, char, multiplier = 1) =>
{
    resource.StudentSanity += 5 * multiplier * char.studentSanityOffset;
    resource.TeacherSanity -= 5 * multiplier * char.profSanityOffset;
    resource.KnowledgeImparted += 5 * multiplier * char.knowledgeOffset;
}

export {berate, readSlides, explain}

window.berate = berate;
window.readSlides = readSlides;
window.explain = explain;