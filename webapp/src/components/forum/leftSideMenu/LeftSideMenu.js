import {AsideWrapper} from "./styles.styled";
import './styles.css';
import SocialMedia from "../../socialMedia/SocialMedia";
import {BsListUl, BsReplyAllFill, BsTags} from "react-icons/bs";
import {FaMedal} from "react-icons/fa";
import {FcLike} from "react-icons/fc";
import {GrCircleQuestion} from "react-icons/gr";
import {FiSearch} from "react-icons/fi";
import {Link} from "react-router-dom";

function LeftSideMenu(){
    return (
        <AsideWrapper id="leftSideMenu">
            <div className="search-topics">
                <form action="">
                   <p className="search-input">
                       <input type="search" placeholder="Search" />
                       <button type="submit"><FiSearch /></button>
                   </p>
                </form>
            </div>
            <div className="forum-menu">
                <h4>MENU</h4>
                <ul>
                    <li className="active"><Link className="active" to="/forum"><BsListUl />Questions</Link></li>
                    <li><a href="#tags"><BsTags />Tags</a></li>
                    <li><a href="#ranking"><FaMedal />Ranking</a></li>
                </ul>
            </div>
            <div className="personal">
                <h4>PERSONAL NAVIGATOR</h4>
               <ul>
                   <li><Link to="/forum"><GrCircleQuestion />Your questions</Link></li>
                   <li><a href="#ownanwser"><BsReplyAllFill /> Your answers</a></li>
                   <li><a href="#ownlikes"><FcLike /> Your likes & votes</a></li>
               </ul>
           </div>
            <div className="media">
                <SocialMedia />
            </div>
        </AsideWrapper>
    )
}

export default LeftSideMenu;