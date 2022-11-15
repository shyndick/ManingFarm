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
            <p>{micro_description}</p>
            <p>от {prices.price_min.amount} р</p>
            <button onClick={handleClick} className="add_to_card">Добавить в корзину</button>
        </div>
    )
}