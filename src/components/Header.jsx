import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className='container'>
            <div className='header__wrapper'>
                <NavLink to="/">Главная</NavLink>
                <NavLink to="/catalog">Каталог</NavLink>
                <NavLink to="/guarantee">Гарантия/Возврат</NavLink>
                <NavLink to="/contacts">Контакты</NavLink>
                <NavLink to="/delivery">Доставка</NavLink>
                <NavLink to="/cart">Корзина</NavLink>
            </div>
        </header>
    )
    
}