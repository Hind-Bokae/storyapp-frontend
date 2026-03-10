const AUTH_API_URL = 'https://localhost:8080/api/auth';
export async function LoginUser(useername: string, password: string) {
    const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
             password: password
             }),
    });
const responseData = await response.json();
localStorage.setItem('authToken', responseData.token);
return responseData;
}
export function getAuthToken() : string | null {
    return localStorage.getItem('authToken');
}
export function LogoutUser() {
    localStorage.removeItem('authToken');
}