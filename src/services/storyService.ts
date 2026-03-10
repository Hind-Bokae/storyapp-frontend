import {getAuthToken} from "./authService";
const STORIES_API_URL = 'http://localhost:8080/api/stories';

export async function getAllStories() {
    const apiResponse = await fetch(STORIES_API_URL);
    const storiesData = await apiResponse.json();
    return storiesData;
}

export async function createStory(title: string, content: string) {
    const authToken = getAuthToken();
    const apiResponse= await fetch(STORIES_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            title: title,
            content: content,
        }),
    });
    const createStory= await apiResponse.json();
    return createStory;
}