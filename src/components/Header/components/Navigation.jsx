import { NavLink } from "react-router-dom"
import { CatalogButton } from "../../../modules/Catalog/components/CatalogButton"

export const Navigation = () => {
    return(
        <>
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
                    
        </>
    )
}