import { NavLink } from "react-router-dom"
import { CatalogButton } from "../modules/Catalog/components/CatalogButton"
import { useState, useEffect } from "react";

export const MobileNav = () => {

    const [burgerClass,setBurgerClass]=useState('burger_icon close');
    const [menuClass,setMenuClass]=useState('nav_wrapper_mobile hidden');
    const [isMenuCLicked,setIsMenuCLicked]=useState(false);
   useEffect(()=>{
        if(isMenuCLicked){
            setBurgerClass('burger_icon open');
            setMenuClass('nav_wrapper_mobile visible')
        }else{
            setBurgerClass('burger_icon close');
            setMenuClass('nav_wrapper_mobile hidden');
        }
   },[isMenuCLicked])

    return(
       <div className="mobile_nav">
            <button className={burgerClass} onClick={()=>{setIsMenuCLicked(!isMenuCLicked)}}>
                                <div className='burger_icon'><i className="fa fa-bars" aria-hidden="true"></i></div>
            </button>
            <div className={menuClass}>
                <NavLink className="nav_link" to="/" onClick={()=>{setIsMenuCLicked(false)}}>Главная</NavLink>
                <NavLink className="nav_link" to="/catalog" onClick={()=>{setIsMenuCLicked(false)}}>Каталог</NavLink>
                <NavLink className="nav_link" to="/coin-list" onClick={()=>{setIsMenuCLicked(false)}}>Курс крипты</NavLink>
                <NavLink className="nav_link" to="/servise" onClick={()=>{setIsMenuCLicked(false)}}>Услуги</NavLink>
                <NavLink className="nav_link" to="/company" onClick={()=>{setIsMenuCLicked(false)}}>О компании</NavLink>
            </div>
            
       </div>
    )
}