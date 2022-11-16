import App from "../Cart/components/ModalCart"
import { observer } from "mobx-react-lite"
import { GoBack } from "../Catalog/components/GoBack"
import { CartItem } from "./components/CartItem"
import cartStore from "./stores/CartStore"

export const Cart = observer(() => {
    const {cart, deleteCartItem, cartPrices, deleteAllCart} = cartStore


    return (

        <main>
            <div className="container">
                <div className="cart_title">
                    <h1>Корзина</h1>
                    <GoBack/>
                    {console.log(cart)}
                </div>
                    {cart.length === 0 && <h2>Корзина пуста</h2>}
                <ul>
                    {cart.length > 0 && cart.map((cartItem) => 
                        <CartItem cartItem={cartItem} deleteCartItem={deleteCartItem} key={cartItem.id}/>
                    )}
                </ul>
            
                {cart.length > 0 && (
                <div className="all_prices">
                    <div className="prices_title">
                        <p >Итого: </p>
                        <p>{cartPrices} BYN</p>
                    </div>
                    <App title='cart Modal'  cart={cart} deleteAllCart = {deleteAllCart}/>
                </div>)}
                
                
            </div>
        </main>
        
        
    )
})