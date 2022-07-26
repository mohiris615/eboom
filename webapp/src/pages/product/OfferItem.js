import './offerItem.css';
import { offers } from '../../seeds/offers';
function OfferItem(){
    const products = offers.products;
    const productItems = products.map(product => {
            return (
             <div className={"offers-item " + product.name}>
                <header>
                    <div className="offer-header--type">{ product.name }</div>
                    <div className="offer-header--pricing">{product.price } € par mois</div>
                </header>
                <div className="offer-content--features">
                    <div className="offer-content-feateares--item">
                    <h4>Fonctionnalités inclus</h4>
                <ul key={product.id}>
                    {
                    product.features.map((feature, index) => {
                        return <li key={index}> {feature}</li> 
                    })
                    }

                </ul>
                </div>
                </div>
                    <div className="offer-button--choose">
                        <button>Choisir cette offre</button>
                    </div>
                </div>
                )
    })
    return (
        <article id="offers">
            { productItems }
        </article>
    )
}
export default OfferItem;