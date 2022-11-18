import { Routes, Route} from "react-router-dom";
import { Main } from "./modules/Main/Main";
import { CoinList } from "./modules/CoinList/CoinList";
import { Contacts } from  "./modules/Contacts/Contacts";
import { Layout } from "./modules/Layout/Layout";
import { Cart } from "./modules/Cart/Cart";
import { Coin} from "./modules/Coin/Coin"
import { Videocard } from "./modules/Catalog/components/Videocard";
import { Cpu } from "./modules/Catalog/components/Cpu";
import { Motherboard } from "./modules/Catalog/components/Motherboard"
import { Product } from "./modules/Catalog/Product/Product";
import { CatalogApp } from "./modules/Catalog/CatalogApp";
import { ServiceApp } from "./modules/Servise/ServiceApp";
import {Maning } from "./modules/Servise/components/Maning"
import {Ferm } from "./modules/Servise/components/Ferm"



function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/videocard" element={<Videocard/>}></Route>
          <Route path="/videocard/:productId" element={<Product/>}></Route>
          <Route path="/cpu" element={<Cpu/>}></Route>
          <Route path="/cpu/:productId" element={<Product/>}></Route>
          <Route path="/motherboard" element={<Motherboard/>}></Route>
          <Route path="/motherboard/:productId" element={<Product/>}></Route>
          <Route index element={<Main/>}></Route>
          <Route path="catalog/*" element={<CatalogApp/>}></Route>
          <Route path="coin-list" element={<CoinList/>}></Route>
          <Route path="coin-list/:id" element={<Coin/>}></Route>
          <Route path="contacts" element={<Contacts/>}></Route>
          <Route path="servise/*" element={<ServiceApp/>}></Route>
          <Route path="/service/maning" element={<Maning/>}></Route>
          <Route path="/service/ferm" element={<Ferm/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
