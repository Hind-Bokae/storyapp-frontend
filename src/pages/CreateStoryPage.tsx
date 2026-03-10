import {useState} from "react";
import {createStory} from "../services/storyService";
export default function CreateStoryPage() {
    const [storyTitle, setStoryTitle] = useState('');
    const [storyContent, setStoryContent] = useState('');

    async function handleCreateStory(formEvent: React.FormEvent) {
        formEvent.preventDefault();
        try {
            const newStory = await createStory(storyTitle, storyContent);
            console.log("Story created successfully", newStory);
            alert("Story created successfully");
            setStoryTitle('');
            setStoryContent('');
        }catch (error) {
            console.log("Failed to create story", error);
            alert("Failed to create story");
        }
    }
return(
    <div>
        <h1>Create Story</h1>
        <form onSubmit={handleCreateStory}>
            <input
                type="text"
                placeholder="Story Title"
                value={storyTitle}
                onChange={(inputEvent) => setStoryTitle(inputEvent.target.value)}
            />
            <br />
            <br />
            <textarea
                placeholder="Story Content"
                value={storyContent}
                onChange={(inputEvent) => setStoryContent(inputEvent.target.value)}
            />
            <br />
            <button type="submit">
            Create Story
            </button>
        </form>
    </div>

    )
}
