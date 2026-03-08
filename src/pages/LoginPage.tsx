import {useState} from 'react';
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (formEvent: React.FormEvent) => {
        formEvent.preventDefault();
        const response = await fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:username,
                password:password })
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful!');
        } else {
            alert('Login failed!');
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(inputEvent) => setUsername(inputEvent.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(inputEvent) => setPassword(inputEvent.target.value)}
                />
               <br />
               <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;


