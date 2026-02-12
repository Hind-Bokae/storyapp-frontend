import type {Story} from "../models/Story.js";
const stories: Story[] = [];
export function getAllStories():Story[]{
    return stories;
}
export function addStory(story:Story):void{
    stories.push(story);
}

export function searchStories(searchTerm:string): Story[]{
    return stories.filter(
        story => 
            story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.content.toLowerCase().includes(searchTerm.toLowerCase())

    );
}