import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="f_wrapper">
                    <div className="f_item">
                    <NavLink to="/contacts">Контакты</NavLink>
                    <NavLink to="/info">O компании</NavLink>
                    <NavLink to="/delivery">Доставка и оплата</NavLink>
                    <NavLink to="/politica">Политика</NavLink>
                    </div>
                    <div className="f_item">
                        <NavLink to="/guarantee">Гарантия/Возврат</NavLink>
                        <NavLink to="/contacts">Обратная связь</NavLink>
                        <NavLink to="/map">Карта сайта</NavLink>
                    </div>
                    <div className="f_item">
                        <NavLink to="/catalog">Каталог</NavLink>
                        <NavLink to="/info">Услуги</NavLink>
                        <NavLink to="/delivery">Майнинг под ключ</NavLink>
                        <NavLink to="/politica">Сборка ферм</NavLink>
                    </div>
                    <div className="f_item">
                        <p>miner@basa.com</p>
                        <p>+7 910 245-02-74</p>
                        <p>ООО"фйти Технологии"</p>
                        <p>ИНН: 5465465465465</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}