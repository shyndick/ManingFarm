import App from "../Cart/components/ModalCart"
import { observer } from "mobx-react-lite"
import { GoBack } from "../Catalog/components/GoBack"
import { CartItem } from "./components/CartItem"
import cartStore from "./stores/CartStore"
import Cat from "../../image/cat.jpg"
 
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
                    {cart.length === 0 && <div className="cart_null">
                            <h2>Пусто...</h2>
                            <div className="cart_img_null">
                                <img src={Cat} alt="" />
                                </div>    
                        </div>}
                <ul>
                    <li className="cart_wrapper">
                        <p className="cart_name">Название</p>
                        <div className="cart_img">
                            Фото
                        </div>
                        <div className="cart_count">Количество шт</div>
                        <p className="price_cart">Цена BYN</p>
                        <a className="cart_delete" ></a>
                    </li>
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