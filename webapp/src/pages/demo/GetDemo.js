import './styles.css';

function GetDemo(){
    return (
        <div class="container-fluid">
            <div className="form-group">
                <h1>Get a Demo</h1>
                <p>Subscribe to stay tuned for new web design and latest updates. Let's do it! </p>
                <form>
                    <p className="getdemo-input">
                        <input type="email" placeholder="Entre votre adresse e-mail" />
                    </p>
                    <p className="getdemo-btn">
                        <button type="submit">Demander la demo</button>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default GetDemo;