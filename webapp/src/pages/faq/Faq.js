import FaqHeader from './FaqHeader';
import FaqQuestions from './FaqQuestions';
import './styles.css';
function Faq (){
    return (
        <div id="faq-page">
               <FaqHeader />
               <FaqQuestions />
        </div>
    )
}


export default Faq;