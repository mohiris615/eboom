import './layout.css';
import "./layout.css";
import LeftSideMenu from "./leftSideMenu/LeftSideMenu";
import RightSideContent from "./rightSideContent/RightSideContent";
import {Link} from "react-router-dom";

function ForumLayout({children}) {
    return (
        <main id="forum-page">
            <div className="addTopic">
                <button className="newTopic"><Link to="/forum/add">Create new topic</Link></button>
            </div>
            <div className="wrapper">
                <LeftSideMenu />
                    {children}
                <RightSideContent />
            </div>
        </main>
    )
}

export default ForumLayout;