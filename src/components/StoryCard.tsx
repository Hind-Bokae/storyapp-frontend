import type {Story} from "../types/Story";
type props = {
    story: Story;
}
function StoryCard({story}: props) {
    return (
        <div>
            <h2>{story.title}</h2>
            <p>{story.content}</p>
            <p>Author: {story.authorUsername}</p>
        </div>
    );
}
export default StoryCard;