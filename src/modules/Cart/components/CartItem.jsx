export const CartItem = ({cartItem, deleteCartItem}) => {

    const {extended_name, images, count, prices, id} = cartItem
    const handleClick = (id) => {
        deleteCartItem(id)
    }

    return (
        <div className="cart_wrapper">
            <p>{extended_name}</p>
            <img src={images.header} alt={extended_name} />
            <p>{count} - {count * prices.price_min.amount}</p>
            <button onClick={()=>handleClick(id)}>Удалть позицию</button>
        </div>
    )
}