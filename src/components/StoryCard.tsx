import type {Story} from "../types/Story";
type props = {
    story: Story;
}
function StoryCard({story}: props) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "15px"
        }}>
            <h2>{story.title}</h2>
            <p>{story.content}</p>
            <p>Author: {story.authorUsername}</p>
        </div>
    );
}
export default StoryCard;