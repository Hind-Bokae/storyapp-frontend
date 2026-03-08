import type { Story } from './types/Story';
const API_URL = "http://localhost:8080/api/stories";

export async function  getAllStories(): Promise<Story[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch stories");
    }
    const data = await response.json();
    return data.content;
}