import {useState} from "react";
function CreateStoryPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleCreateStory = async (formEvent: React.FormEvent) => {
        formEvent.preventDefault();
        const story ={
            title:title,
            content:content,
            }
        await fetch('http://localhost:8080/api/stories', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(story),
        });
        window.location.href = '/';
    }
    return (
        <div>
            <h1>Create Story</h1>
            <form onSubmit={handleCreateStory}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(inputEvent) => setTitle(inputEvent.target.value)}
                />
                <br />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(inputEvent) => setContent(inputEvent.target.value)}
                />
                <br />
                <button type="submit">Create Story</button>
            </form>
        </div>
    );
}
export default CreateStoryPage;