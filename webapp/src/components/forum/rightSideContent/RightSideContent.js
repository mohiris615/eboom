import {FiLink, FiStar} from "react-icons/fi";
import "./styles.css";
function RightSideContent(){
    return(
        <aside id="topic-aside--right">
            <div className="read">
                <h3><FiStar />Must-read posts</h3>
                <hr/>
                <ul>
                    <li><a href="#mustread">Please read rules before you start working on a platform</a></li>
                    <li><a href="#vison">Vision & Strategy of Alemhelp</a></li>
                </ul>
            </div>
          <div className="feature-links">
              <h3><FiLink />Featured links</h3>
              <hr/>
              <ul>
                  <li><a href="#code">Alemhelp source-code on GitHub</a></li>
                  <li><a href="#git">Alemhelp source-code on GitHub</a></li>
                  <li><a href="#school">Alem.School dashboard</a></li>
              </ul>
          </div>

        </aside>
    )
}

export default RightSideContent;