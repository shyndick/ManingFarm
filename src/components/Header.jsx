import { NavLink } from "react-router-dom"
import Logo  from "../image/logo.png"

export const Header = () => {
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
                        <div className="info_messege">
                            <a href="https://www.instagram.com/" target='blank' className='massege_item'><i className="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="https://web.telegram.org/" target='blank' className='massege_item'><i className="fa fa-telegram" aria-hidden="true"></i></a>
                            <a href="https://www.whatsapp.com/" target='blank' className='massege_item'><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
                        </div>
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
                        <NavLink className="nav_link" to="/catalog">Каталог</NavLink>
                        <NavLink className="nav_link" to="/guarantee">Гарантия/Возврат</NavLink>
                        <NavLink className="nav_link" to="/contacts">Контакты</NavLink>
                        <NavLink className="nav_link" to="/delivery">Доставка</NavLink>
                    </div>
                    <div className="nav_cart">
                        <NavLink to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
    
}