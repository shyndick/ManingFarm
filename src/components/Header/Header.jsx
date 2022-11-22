import { NavLink } from "react-router-dom"
import Logo  from "../../image/logo.png"
import { ContactMessege } from "../ContactMessege"
import cartStore from "../../modules/Cart/stores/CartStore"
import { observer } from "mobx-react-lite"
import { CatalogButton } from "../../modules/Catalog/components/CatalogButton"
import App from "./components/ModalHeader"
import { Navigation } from "./components/Navigation"
import { MobileNav } from "./components/MobileNav"

export const Header = observer(() => {

    const {showModal} = App

    const {cartCount, cartPrices} = cartStore

    return (
        <header >
            <div className="info fixed">
                <div className="container"> 
                    <div className="info_wrapper">
                        <div className="info_items">
                            <a className='info_email' href="email:maner@basa.com"><i className="fa fa-envelope" aria-hidden="true"></i>miner@basa.com</a>
                            <a className='info_phone' href="tel:3-021-021"><i className="fa fa-phone" aria-hidden="true"></i>3-021-021</a>
                            <App/>
                        </div>
                        <ContactMessege/>
                        <MobileNav/> 
                    </div>
                       
                </div>
            </div>
            <div className="container">
                <div className="nav nav_fixed">
                    <div className="logo">
                        <a href="/"><img src={Logo} alt="" /></a>
                    </div>
                    <Navigation/>
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