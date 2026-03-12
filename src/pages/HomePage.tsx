import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Story } from "../types/Story";
import { getAllStories } from "../services/storyService";
import StoryCard from "../components/StoryCard";
import { logoutUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function HomePage() {
const [stories, setStories] = useState<Story[]>([]);
const [loading, setLoading] = useState(true);
const navigate = useNavigate();
function handleLogout() {
    logoutUser();
    navigate("/login");
}
    useEffect(() => {
        async function loadStories() {
            const stories= await fetchStories();
            setStories(stories);
            setLoading(false);
        }
        loadStories();
    }, []);
    if (loading) {
        return <p>Loading stories...</p>;
        }
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