export function berate (resource, char, multiplier)
{
    resource.StudentHappiness -= 5 * multiplier * (1 / char.studentHappyOffset);
    resource.TeacherSanity += 5 * multiplier * char.profSanityOffset;
}

export function readSlides (resource, char, multiplier)
{
    resource.KnowledgeImparted += 5 * multiplier * char.knowledgeOffset
    resource.StudentEngagement -= 2 * multiplier * (1 / char.studentEngageOffset);
}

export function explain (resource, char, multiplier)
{
    resource.StudentSanity += 5 * multiplier * char.studentSanityOffset;
    resource.TeacherSanity -= 5 * multiplier * char.profSanityOffset;
    resource.KnowledgeImparted += 5 * multiplier * char.knowledgeImpartedOffset;
}