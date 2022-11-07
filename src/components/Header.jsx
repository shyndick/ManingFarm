import { NavLink } from "react-router-dom"
import Viber from '../image/viberLogo.svg'
import Telegram from '../image/telegramLogo.svg'
import Instagram from '../image/instagramLogo.svg'

export const Header = () => {
    return (
        <header >
            <div className="info">
                <div className="container"> 
                    <div className="info_wrapper">
                        <div className="info_items">
                            <a className='info_email' href="email:maner@basa.com">miner@basa.com</a>
                            <a className='info_phone' href="tel:+375255275480">+375 25 527-54-80</a>
                            <a className='info_pozvoni' href="#">Заказать звонок</a>
                        </div>
                        <div className="info_messege">
                            <a href="https://www.viber.com/ru/" target='blank' className='massege_item'> <img src={Viber} alt="viber" /></a>
                            <a href="https://web.telegram.org/" target='blank' className='massege_item'><img src={Telegram} alt="telegram" /></a>
                            <a href="https://www.instagram.com/" target='blank' className='massege_item'><img src={Instagram} alt="instagram" /></a>
                        </div>
                    </div>    
                </div>
            </div>
            <div className="container">
                <div className='nav_wrapper'>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/catalog">Каталог</NavLink>
                    <NavLink to="/guarantee">Гарантия/Возврат</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                    <NavLink to="/delivery">Доставка</NavLink>
                    <NavLink to="/cart">Корзина</NavLink>
                </div>
            </div>
        </header>
    )
    
}