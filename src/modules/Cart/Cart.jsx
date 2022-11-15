import {ModalCart} from "../../components/ModalCart"
import { observer } from "mobx-react-lite"
import { GoBack } from "../Catalog/components/GoBack"
import { CartItem } from "./components/CartItem"
import cartStore from "./stores/CartStore"
import { useState } from "react"

export const Cart = observer(() => {
    const {cart, deleteCartItem, cartPrices, deleteAllCart} = cartStore
    const [visibile, setVIsibile] = useState(false)

    const openModal = () => {
        setVIsibile(true)
    }

    const handleModalClose = () => {
        setVIsibile(false)
    }


    return (

        <main>
            <div className="container">
                <div className="cart_title">
                    <h1>Корзина</h1>
                    <GoBack/>
                    {console.log(cart)}
                </div>
                {cart.length === 0 && <h2>Корзина пуста</h2>}
                {cart.length > 0 && cart.map((cartItem) => 
                    <CartItem cartItem={cartItem} deleteCartItem={deleteCartItem} key={cartItem.id}/>
                )} 
            </div>
            <div className="all_prices">
                <p>{cartPrices}</p>
            </div>
            <button onClick={openModal}>zakaz</button>
            {visibile && <ModalCart onClose={handleModalClose} title='cart Modal' cart={cart} deleteAllCart = {deleteAllCart}/>}
        </main>
        
        
    )
})