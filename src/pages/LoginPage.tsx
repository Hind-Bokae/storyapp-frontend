import {useState} from 'react';
import {LoginUser} form "../services/authService";
import {useNavigate} form "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate();

    async function handleLogin(formEvent: React.FormEvent) {
        formEvent.preventDefault();
        try {
            const loginResponse = await LoginUser(username, password);
            console.log("Login successful", loginResponse);
            navigate("/");
        } catch (error) {
            console.log("Login failed", error);
        }
    }
   }
    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(inputEvent) => setUsername(inputEvent.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(inputEvent) => setPassword(inputEvent.target.value)}
                />
               <br />
               <button type="submit">
               Login
               </button>
            </form>

    );
}
export default LoginPage;


