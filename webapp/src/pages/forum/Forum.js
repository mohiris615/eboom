import TopicList  from '../../components/forum/topicList/TopicList';
import LeftSideMenu  from '../../components/forum/leftSideMenu/LeftSideMenu';
import RightSideContent  from '../../components/forum/rightSideContent/RightSideContent';
import {Wrapper, Container, Main } from './styles.styled';
import './styles.css';
import TagsMenu from "../../components/forum/tagsMenu/TagsMenu";
function Forum(){
    return (
        <Container id="forum-page">
            <Wrapper>
                <LeftSideMenu />
                <Main>
                    <TagsMenu />
                    <TopicList />
                </Main>
                <RightSideContent />
            </Wrapper>
        </Container>
    )
}

export default Forum;