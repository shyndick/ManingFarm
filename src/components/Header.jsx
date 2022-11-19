import { NavLink } from "react-router-dom"
import Logo  from "../image/logo.png"
import { ContactMessege } from "./ContactMessege"
import cartStore from "../modules/Cart/stores/CartStore"
import { observer } from "mobx-react-lite"
import { CatalogButton } from "../modules/Catalog/components/CatalogButton"

export const Header = observer(() => {

    const {cartCount, cartPrices} = cartStore

    return (
        <header >
            <div className="info">
                <div className="container"> 
                    <div className="info_wrapper">
                        <div className="info_items">
                            <a className='info_email' href="email:maner@basa.com"><i className="fa fa-envelope" aria-hidden="true"></i>miner@basa.com</a>
                            <a className='info_phone' href="tel:+375255275480"><i className="fa fa-phone" aria-hidden="true"></i>+375 25 527-54-80</a>
                            <a className='info_pozvoni' href="tel:+375255275480">Заказать звонок</a>
                        </div>
                        <ContactMessege/>
                    </div>    
                </div>
            </div>
            <div className="container">
                <div className="nav">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="" /></a>
                    </div>
                    <div className='nav_wrapper'>
                        <NavLink className="nav_link" to="/">Главная</NavLink>
                        <div className="dropdown">
                            <NavLink className="nav_link" to="/catalog">Каталог</NavLink>
                            <CatalogButton/>
                        </div>
                        <NavLink className="nav_link" to="/coin-list">Курс крипты</NavLink>
                        <NavLink className="nav_link" to="/servise">Услуги</NavLink>
                        <NavLink className="nav_link" to="/company">О компании</NavLink>
                    </div>
                    <div className="nav_cart">
                        <NavLink to="/cart">
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            {cartPrices && cartCount && <div className="nav_cart_price">
                                <p>{cartPrices} BYN</p>
                                <p>{cartCount} товар</p>     
                            </div>}
                            </NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
    
})