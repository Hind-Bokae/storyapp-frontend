import {createContext, useContext, useState} from "react";

type AuthContextType = {
    isLoggedIn: boolean;
    username: string | null;
    login: (token: string, username:string) => void;
    logout: () => void;
}
const AuthContext = createContext<AuthContextType| undefined>(undefined);
export function AuthProvider({children}: {children: React.ReactNode}) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("authToken")
    );
    const [username, setUsername] = useState<string | null>(
        localStorage.getItem("username")
    );
    function login(token: string, usernameParam: string) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("username", usernameParam );
        setIsLoggedIn(true);
        setUsername(usernameParam);
    }
    function logout() {
        localStorage.removeItem("authToken");
        localStorage.removeItem("username");
        setIsLoggedIn(false);
        setUsername(null);
    }
    return (
        <AuthContext.Provider value={{isLoggedIn, username,login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}