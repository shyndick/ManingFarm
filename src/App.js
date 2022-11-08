import { Routes, Route} from "react-router-dom";
import { Main } from "./modules/Main/Main";
import { CoinList } from "./modules/CoinList/CoinList";
import { Contacts } from  "./modules/Contacts/Contacts";
import { Catalog } from  "./modules/Catalog/Catalog";
import { Guarantee } from  "./modules/Guarantee/Guarantee";
import { Delivery } from  "./modules/Delivery/Delivery";
import { Layout } from "./modules/Layout/Layout";
import { Cart } from "./modules/Cart/Cart";


function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main/>}></Route>
          <Route path="catalog" element={<Catalog/>}></Route>
          <Route path="coin-list" element={<CoinList/>}></Route>
          <Route path="contacts" element={<Contacts/>}></Route>
          <Route path="delivery" element={<Delivery/>}></Route>
          <Route path="cart" element={<Cart/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
