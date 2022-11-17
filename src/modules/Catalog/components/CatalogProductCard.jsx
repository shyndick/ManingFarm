import { Link } from "react-router-dom"
import cartStore from "../../Cart/stores/CartStore"
import { Image } from "antd"

export const CatalogProductCard = ({productCard}) => {

    const {name, images, id, extended_name, micro_description, prices} = productCard
    const {addToCart, cart} = cartStore

    const handleClick = () => {
        addToCart(productCard)
    }

    return(
        <div className="catalog_item">
            <div className="catalog_item_img">
                <Image src={images.header} alt={name} />
            </div>
            <h3><Link to={`./${id}`}>{extended_name}</Link></h3>
            <p className="catalog_micro_desiner">{micro_description}</p>
            <div className="catalog_price_bnt">
                <p>от {prices.price_min.amount} BYN</p>
                <button onClick={handleClick} className="add_to_card">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
            
        </div>
    )
}