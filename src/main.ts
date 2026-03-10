
import {addStory, getAllStories, searchStories} from "./services/storyService.js";
console.log("=== ADD STORY ===");
addStory({
    title: "First Story",
    content: "Learning TypeScript",
    author:"Hind"
});

console.log("=== SEARCH 'type' ===");
console.log(searchStories("type"));
console.log("=== SEARCH 'type' ===");
console.log(searchStories("type"));