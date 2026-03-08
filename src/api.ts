const BASE_URL = 'http://localhost:8080/api';

export async function getStories() {
    const response = await fetch(`${BASE_URL}/stories`);
    return response.json();
}