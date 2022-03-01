
// Reading Slides
const readSlides = (resource, char) =>
{
    resource.KnowledgeImparted += 10 * char.knowledgeOffset;
    resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.TeacherEngagement += 10 * char.profSanityOffset;
	
}

const skimSlides = (resource, char) =>
{
    resource.KnowledgeImparted += 5 * char.knowledgeOffset;
    resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.TeacherHappiness += 10 * char.profHappyOffset;
}

const explainSlides = (resource, char) =>
{
	resource.KnowledgeImparted += 15 * char.knowledgeOffset;
    resource.StudentEngagement -= 10 * (1 / char.studentEngageOffset);
	resource.TeacherEngagement -= 5 * (1 / char.profHappyOffset);
}


// Student Responses
const explain = (resource, char) =>
{
    resource.StudentSanity += 10  * char.studentSanityOffset;
    resource.TeacherEngagement -= 5  * char.profEngageOffset;
    resource.KnowledgeImparted += 5  * char.knowledgeOffset;
}

const berate = (resource, char) =>
{
    resource.StudentHappiness -= 5  * (1 / char.studentHappyOffset);
    resource.TeacherSanity += 10  * char.profSanityOffset;
}

const reiterate = (resource, char) =>
{
	resource.StudentEngagement += 10 * char.studentEngageOffset;
	resource.TeacherSanity -= 5  * (1 / char.profSanityOffset);
    resource.KnowledgeImparted += 5  * char.knowledgeOffset;
}

export {berate, readSlides, skimSlides, explain}

window.berate = berate;
window.readSlides = readSlides;
window.skimSlides = skimSlides;
window.explain = explain;