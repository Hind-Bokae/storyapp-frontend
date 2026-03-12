import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Navbar() {
    const {isLoggedIn, logout, username} = useAuth();
        const navigate = useNavigate();
        function handleLogout() {
            localStorage.removeItem("authToken");
            localStorage.removeItem("username");
            logout();
            navigate("/login");
        }
    return (
        <nav style={{
            padding: "10px",
            borderBottom: "1px solid #ddd",
            marginBottom: "20px"
            }}>
            <Link to="/" style={{marginRight:"15px" }}>
            Home
            </Link>
            {" | "}
            {!isLoggedIn && (
                <Link to="/login" style={{marginRight:"15px" }} >Login</Link>)
            }
            {isLoggedIn && (
                    <Link to="/create-story" style={{marginRight:"15px" }}>Create Story</Link>
                     )}
            {isLoggedIn && (
                <>
                <span style={{marginLeft:"15px" , marginRight:"115px"}}>Welcome {username}</span>

                <button onClick={handleLogout}>Logout</button>
                </>
             )}
        </nav>
    );
}