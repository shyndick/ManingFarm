export const CartItem = ({cartItem, deleteCartItem, cartNumber}) => {

    const {extended_name, images, count, prices, id} = cartItem

    cartNumber = 0
    
    const handleClick = (id) => {
        deleteCartItem(id)
    }

    return (

        

        <li className="cart_wrapper">
            <p className="cart_name">{extended_name}</p>
            <div className="cart_img">
                <img src={images.header} alt={extended_name} />
            </div>
            <div className="cart_count">{count} шт</div>
            <p className="price_cart">{count * prices.price_min.amount} BYN</p>
            <a className="cart_delete" onClick={()=>handleClick(id)}><i class="fa fa-times" aria-hidden="true"></i></a>
        </li>
    )
}