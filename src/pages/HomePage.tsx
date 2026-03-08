import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Story } from "../types/Story";
import { getAllStories } from "../services/storyService";
import StoryCard from "../components/StoryCard";

function HomePage() {
const [stories, setStories] = useState<Story[]>([]);

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
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/create-story">Create Story</Link>
        </div>
    );
}

export default HomePage;