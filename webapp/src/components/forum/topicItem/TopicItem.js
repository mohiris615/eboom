import './styles.css';
import {BiComment, BiShowAlt} from "react-icons/bi";
import {AiOutlineArrowUp} from "react-icons/ai";
function TopicItem(props){
    return (
        <div className="topicItem-container">
            <div className="topic-header">
               <div className="user--profile">
                   <div className="avatar"
                        style={{
                            backgroundImage: `url(${props.avatar})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}>

                   </div>
                   <div className="name">
                       <div className="user--full-name">{props.username}</div>
                       <div className="user--connexion-status">5 min ago</div>
                   </div>
               </div>
               <div className="user--btn-options">...</div>
            </div>
            <div className="topic-body">
                <div className="title">
                    <h4>{props.title}</h4>
                </div>
                <div className="resume">
                    {props.resume}
                </div>
            </div>
            <div className="topic-footer">
                <ul className="topic-tags">
                    {
                        props.tags.map((tag, index) => {
                            return(
                                <li key={index}><a href="#">{tag}</a></li>
                            )
                        })
                    }
                </ul>
                <ul className="topic-stats">
                    <li><a href="#"><BiShowAlt />{props.views}</a></li>
                    <li><a href="#"><BiComment />{props.comments.length}</a></li>
                    <li><a href="#"><AiOutlineArrowUp />{props.votes}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default TopicItem;