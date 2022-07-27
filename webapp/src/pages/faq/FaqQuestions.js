import { faqs } from '../../seeds/faq';
import { useState } from 'react';

function FaqQuestions() {

    const [asked, setAsked] = useState("");
    const [response, setResponse ] = useState("");
    const [active, setActive ] = useState(0);

    const questions = faqs.questions;

    const faqItems = questions.map(faq => {
        return (
            
                <li className={`questionItem ${active === faq.id ? "active" : ""}`} key={faq.id} onClick={() => {
                    setAsked(faq.question);
                    setResponse(faq.answer);
                    setActive(faq.id);
                }}
                 >{faq.question}
                 </li>
          
        )
    });


    return (
        <div className="faqContainer">
            <div className="faq">
                <h1>Frequently Asked Questions</h1>
                <div className="faq-content">
                    <div className="questions">
                        <ul className="questionm-list">
                            {faqItems}
                        </ul>
                    </div>
                    <div className="answers">
                        <p className="asked">{asked}</p>
                        <p className="response">{response}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqQuestions;