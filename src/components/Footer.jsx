import { NavLink } from "react-router-dom"
import { ContactMessege } from "./ContactMessege"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="f_wrapper">
                    <div className="f_item">
                        <p className="f_title">Инфомация</p>
                        <NavLink to="/contacts">Контакты</NavLink>
                        <NavLink to="/company">O компании</NavLink>
                        <NavLink to="/delivery">Доставка и оплата</NavLink>
                        <NavLink to="/politica">Политика обработки персональных данных</NavLink>
                    </div>
                    <div className="f_item">
                        <p className="f_title">Служба поддежки</p>
                        <NavLink to="/guarantee">Гарантия/Возврат</NavLink>
                        <NavLink to="/service/consultation">Обратная связь</NavLink>
                    </div>
                    <div className="f_item">
                        <p className="f_title">Покупателям</p>
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/servise">Услуги</NavLink>
                        <NavLink to="/service/maning">Майнинг под ключ</NavLink>
                        <NavLink to="/service/ferm">Сборка ферм</NavLink>
                    </div>
                    <div className="f_item">
                        <p className="f_title">Контактная инфомация</p>
                        <a className='contact_email' href="email:maner@basa.com">miner@basa.com</a>
                        <a className='contact_phone' href="tel:+375255275480">3-021-021</a>
                        <p>ООО"Aйти Технологии"</p>
                        <p>ИНН: 5465465465465</p>
                        <ContactMessege/>
                    </div>
                </div>
            </div>
        </footer>
    )
}