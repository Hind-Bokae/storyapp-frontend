import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Story } from "../types/Story";
import { getAllStories } from "../services/storyService";
import StoryCard from "../components/StoryCard";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function HomePage() {
const [stories, setStories] = useState<Story[]>([]);
const navigate = useNavigate();
function handleLogout() {
    logoutUser();
    navigate("/login");
}
    useEffect(() => {
        getAllStories()
            .then((data) => {
                setStories(data);
            });
    }, []);

    return (
        <div>
            <h1>Story App</h1>
            {stories.map((story) => (
                <StoryCard key={story.id} story={story} />
            ))}
        </div>
    );
}

export default HomePage;