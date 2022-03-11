
// Reading Slides
const readSlides = (resource, char) =>
{
    resource.KnowledgeImparted += 10 * char.knowledgeOffset;
    resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.TeacherEngagement += 10 * char.profEngageOffset;
	resource.KnowledgeImparted += 10 * char.knowledgeOffset;
	
}

const skimSlides = (resource, char) =>
{
    resource.KnowledgeImparted += 5 * char.knowledgeOffset;
    resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.TeacherHappiness += 10 * char.profHappyOffset;
	resource.KnowledgeImparted += 5 * char.knowledgeOffset;
}

const explainSlides = (resource, char) =>
{
	resource.KnowledgeImparted += 15 * char.knowledgeOffset;
    resource.StudentEngagement -= 10 * (1 / char.studentEngageOffset);
	resource.TeacherEngagement -= 5 * (1 / char.profHappyOffset);
	resource.KnowledgeImparted += 15 * char.knowledgeOffset;
}


// Student Question
const explain = (resource, char) =>
{
    resource.StudentSanity += 10  * char.studentSanityOffset;
    resource.TeacherEngagement -= 5  * char.profEngageOffset;
    resource.KnowledgeImparted += 10  * char.knowledgeOffset;
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
	resource.KnowledgeImparted += 5 * char.knowledgeOffset;
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
	resource.TeacherEngagement += 10 * char.profEngageOffset;
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
	resource.StudentHappiness += 5 * char.studentHappyOffset;
	resource.StudentEngagement += 5 * char.studentEngageOffset;
	resource.StudentSanity += 5 * char.studentSanityOffset;
	resource.TeacherEngagement += 5 * char.profEngageOffset;
	resource.TeacherHappiness += 5 * char.profHappyOffset;
	resource.TeacherSanity += 5 * char.profSanityOffset;
}

const getAttention = (resource, char) =>
{
	resource.StudentEngagement += 10 * char.studentEngageOffset;
}

const ignore = (resource, char) =>
{
	resource.StudentEngagement -= 15 * (1 / char.studentEngageOffset);
	resource.StudentSanity -= 5 * (1 / char.studentSanityOffset);
}

const yellAttention = (resource, char) =>
{
	resource.StudentHappiness -= 5 * (1 / char.studentHappyOffset);
	resource.StudentEngagement += 15 * char.studentEngageOffset;
	resource.StudentSanity -= 10 * (1 / char.studentSanityOffset);
	resource.TeacherSanity += 10 * char.profSanityOffset;
}


// Explain a concept

const tangent = (resource, char) =>
{
	resource.StudentHappiness += 5 * (1 / char.studentHappyOffset);
	resource.TeacherEngagement += 5 * char.profEngageOffset;
	resource.TeacherHappiness += 5 * char.profHappyOffset;
}

const explainNormal = (resource, char) =>
{
	resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.KnowledgeImparted += 10 * char.knowledgeOffset;
}

const basicExplanation = (resource, char) =>
{
	resource.KnowledgeImparted += 5 * char.knowledgeOffset;
}

const inDepthExplanation = (resource, char) =>
{
	resource.TeacherEngagement -= 10 * (1 / char.profEngageOffset);
	resource.StudentEngagement -= 10 * (1 / char.studentEngageOffset);
	resource.KnowledgeImparted += 20 * char.knowledgeOffset;
}

const dontExplain = (resource, char) =>
{
	resource.TeacherSanity += 10 * char.profSanityOffset;
	resource.StudentEngagement -= 20 * (1 / char.studentEngageOffset);
	resource.StudentSanity -= 20 * (1 / char.studentSanityOffset);
	resource.KnowledgeImparted += 1 * char.knowledgeOffset;
}


// Student comes in late

const yellLate = (resource, char) =>
{
	resource.TeacherSanity += 10 * char.profSanityOffset;
	resource.StudentSanity -= 10 * (1 / char.studentSanityOffset);
}

const ignoreLate = (resource, char) =>
{
	resource.TeacherSanity -= 5 * (1/ char.profSanityOffset);
	resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
}

const slyComment = (resource, char) =>
{
	resource.TeacherSanity += 5 * char.profSanityOffset;
	resource.StudentSanity -= 5 * (1 / char.studentSanityOffset);
	resource.StudentHappiness += 5 * char.studentHappyOffset;
}

const overexplain = (resource, char) =>
{
	resource.TeacherSanity += 15 * char.profSanityOffset;
	resource.StudentSanity -= 15 * (1 / char.studentSanityOffset);
	resource.StudentHappiness -= 15 * (1 / char.studentHappyOffset);
	resource.StudentEngagement -= 15 * (1 / char.studentEngageOffset);
}


// Hard Slide

const hardExplanation = (resource, char) =>
{
	resource.TeacherEngagement -= 10 * (1 / char.profEngageOffset);
	resource.StudentEngagement -= 10 * (1 / char.studentEngageOffset);
	resource.KnowledgeImparted += 20 * char.knowledgeOffset;
}

const summarize = (resource, char) =>
{
	resource.StudentEngagement -= 5 * (1 / char.studentEngageOffset);
	resource.StudentSanity += 10 * char.studentSanityOffset;
	resource.KnowledgeImparted += 10 * char.knowledgeOffset;
}

const tellToRead = (resource, char) =>
{
	resource.StudentEngagement -= 20 * (1 / char.studentEngageOffset);
	resource.StudentSanity -= 20 * (1 / char.studentSanityOffset);
	resource.TeacherSanity += 10 * char.profSanityOffset;
	resource.KnowledgeImparted += 5 * char.knowledgeOffset;
}

// Misc.

const ignoreDisruption = (resource, char) =>
{
	resource.TeacherSanity -= 5 * char.profSanityOffset;
	resource.TeacherHappiness -= 5 * char.profHappinessOffset;
}



export {berate, readSlides, skimSlides, explain, explainSlides, reiterate, readNotes, helpStudents, relax, drink, allowAnyone, assignGroups, splitClass, joke, getAttention, ignore, yellAttention, tangent, explainNormal, basicExplanation, inDepthExplanation, dontExplain, yellLate, ignoreLate, slyComment, overexplain, hardExplanation, summarize, tellToRead, ignoreDisruption}

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
window.joke = joke;
window.getAttention = getAttention;
window.ignore = ignore;
window.yellAttention = yellAttention;
window.tangent = tangent;
window.explainNormal = explainNormal;
window.basicExplanation = basicExplanation;
window.inDepthExplanation = inDepthExplanation;
window.dontExplain = dontExplain;
window.yellLate = yellLate;
window.ignoreLate = ignoreLate;
window.slyComment = slyComment;
window.overexplain = overexplain;
window.hardExplanation = hardExplanation;
window.summarize = summarize;
window.tellToRead = tellToRead;
window.ignoreDisruption = ignoreDisruption;