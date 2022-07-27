import SocialMedia from '../../components/socialMedia/SocialMedia';
import './styles.css';

function FaqHeader(){
    return (<>
        <header className="faq-header">
            <div className="faq-header--content">
                <div className="faq-header--left-content">
                    <h1>How can we help you?</h1>
                    <form className="search-form">
                        <p className="search-form-input">
                            <input type="search" name="faqSearch" placeholder="Search.." />
                            <button type="submit">GO</button>
                        </p>
                    </form>
                    <p>Popular helpt topics: <span>chatbot, api, account,  register</span></p>
                </div>
                <div className="faq-header--right-content">
                    <SocialMedia />
                </div>
            </div>
        </header>
        <div className="waves">
             <svg id="faq-clipath" 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320">
                            <linearGradient id="my-cool-gradient" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#fff" />
                                <stop offset="25%" stopColor="#fff" />
                                <stop offset="50%" stopColor="#d9d4d4" />
                                <stop offset="75%" stopColor="#d9d4d4" />
                                <stop offset="100%" stopColor="#fff" />
                            </linearGradient>
                        <path fill="#0099ff" 
                          fillOpacity="1" 
                            d="M0,96L80,90.7C160,85,320,75,480,106.7C640,139,800,213,960,202.7C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">

                            </path>
                    </svg>
        </div>
        </>)
}

export default FaqHeader;