import TopicItem from "../topicItem/TopicItem";
import { topics } from '../../../seeds/topics';
function TopicList(){
    const topicCollection = topics.questions.map(topic => {
        return(
            <TopicItem
                key={topic.id}
                username={topic.username}
                title={topic.title}
                resume={topic.resume}
                avatar={topic.avatar}
                comments={topic.comments}
                tags={topic.tags}
                votes={topic.votes}
                views={topic.views}
            />
        )
    })
    return (
        <div id="topics-listing">
            {topicCollection}
        </div>)
}
export default TopicList;