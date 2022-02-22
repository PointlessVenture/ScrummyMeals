import {resources} from "index.js"
import {Character} from "index.js"

function berate (resource, char, multiplier)
{
    resource.StudentHappiness -= 5 * multiplier * char.studentHappyOffset;
    resource.TeacherSanity += 5 * multiplier * char.profSanityOffset;
}

function readSlides (resource, char, multiplier)
{
    resource.KnowledgeImparted += 5 * multiplier; //* Knowledge Imparted;
    resource.StudentEngagement -= 2 * multiplier * studentEngageOffset;
}