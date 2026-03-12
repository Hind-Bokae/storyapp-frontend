import {Link} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

export default function Navbar() {
    const {isLoggedIn, logout, username} = useAuth();
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

                <button onClick={logout}>Logout</button>
                </>
             )}
        </nav>
    );
}