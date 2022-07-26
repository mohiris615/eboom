import './styles.css';

function GetDemo(){
    return (
        <div class="container-fluid">
            <div className="form-group">
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