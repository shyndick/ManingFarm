import { Routes, Route} from "react-router-dom";
import { Main } from "./modules/Main/Main";
import { CoinList } from "./modules/CoinList/CoinList";
import { Contacts } from  "./modules/Contacts/Contacts";
import { Layout } from "./modules/Layout/Layout";
import { Cart } from "./modules/Cart/Cart";
import { Coin} from "./modules/Coin/Coin"
import { CatalogApp } from "./modules/Catalog/CatalogApp";
import { CatalogAppMain } from "./modules/Catalog/CatalogAppMain";
import { ServiceApp } from "./modules/Servise/ServiceApp";
import {Maning } from "./modules/Servise/components/Maning"
import {Ferm } from "./modules/Servise/components/Ferm"
import { Consultation } from "./modules/Servise/components/Consultation";
import {Company} from "./modules/Company/Company"



function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/*" element={<CatalogAppMain/>}></Route>
          <Route path="/service/maning" element={<Maning/>}></Route>
          <Route path="/service/ferm" element={<Ferm/>}></Route>
          <Route path="/service/consultation" element={<Consultation/>}></Route>
          <Route index element={<Main/>}></Route>
          <Route path="catalog/*" element={<CatalogApp/>}></Route>
          <Route path="coin-list" element={<CoinList/>}></Route>
          <Route path="coin-list/:id" element={<Coin/>}></Route>
          <Route path="company" element={<Company/>}></Route>
          <Route path="contacts" element={<Contacts/>}></Route> 
          <Route path="servise/*" element={<ServiceApp/>}></Route>      
          <Route path="cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
