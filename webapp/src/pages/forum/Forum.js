
import {Container } from './styles.styled';
import './styles.css';

import ForumLayout from "../../components/forum/ForumLayout";
import TopicList from "../../components/forum/topicList/TopicList";
function Forum(){

    return (
        <ForumLayout >
            <TopicList />
        </ForumLayout>
    )
}

export default Forum;