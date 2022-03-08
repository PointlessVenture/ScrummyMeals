
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


// Student Question
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

// Lull in class

const readNotes = (resource, char) =>
{
    resource.TeacherEngagement += 10 * char.profEngageOffset;
	resource.TeacherHappiness -= 5 * (1 / char.profHappyOffset);
}

const helpStudents = (resource, char) =>
{
    resource.StudentHappiness += 5 * char.studentHappyOffset;
	resource.StudentSanity += 10 * char.studentSanityOffset;
}

const relax = (resource, char) =>
{
    resource.TeacherHappiness += 10 * char.profHappyOffset;
	resource.TeacherSanity += 5 * char.profSanityOffset;
}

const drink = (resource, char) =>
{
    resource.TeacherHappiness += 15 * char.profHappyOffset;
	resource.TeacherSanity += 10 * char.profSanityOffset;
	resource.BloodAlchoholContent += 0.04;
	resource.StudentEngagement += 5 * char.studentEngageOffset;
}


// Set up groups
const allowAnyone = (resource, char) =>
{
	resource.StudentHappiness += 10 * char.studentHappyOffset;
	resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
}

const assignGroups = (resource, char) =>
{
	resource.StudentEngagement += 5 * char.studentHappyOffset;
	resource.studentSanityOffset -= 5 * (1 / char.studentEngageOffset);
}

const splitClass = (resource, char) =>
{
	resource.StudentHappiness += 5 * char.studentHappyOffset;
	resource.StudentEngagement -= 10 * (1 / char.studentEngageOffset);
	resource.StudentSanity += 5 * char.studentSanityOffset;
}


// Losing interest

const joke = (resource, char) =>
{

}

const getAttention = (resource, char) =>
{

}

const ignore = (resource, char) =>
{

}

const yell = (resource, char) =>
{

}


// Explain a concept

const tangent = (resource, char) =>
{

}

const explainNormal = (resource, char) =>
{

}

const basicExplanation = (resource, char) =>
{

}

const inDepthExplanation = (resource, char) =>
{

}


export {berate, readSlides, skimSlides, explain, explainSlides, reiterate, readNotes, helpStudents, relax, drink, allowAnyone, assignGroups, splitClass}

window.berate = berate;
window.readSlides = readSlides;
window.skimSlides = skimSlides;
window.explain = explain;
window.explainSlides = explainSlides;
window.reiterate = reiterate;
window.readNotes = readNotes;
window.helpStudents = helpStudents;
window.relax = relax;
window.drink = drink;
window.allowAnyone = allowAnyone;
window.assignGroups = assignGroups;
window.splitClass = splitClass;
