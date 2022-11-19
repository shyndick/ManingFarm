import { Routes, Route } from "react-router-dom"
import { Product } from "./Product/Product"
import { Videocard } from "./components/Videocard"
import { Cpu } from "./components/Cpu"
import { Motherboard } from "./components/Motherboard"

export const CatalogAppMain = () => {
    return(
        <Routes>
            <Route path="/:productId" element={<Product/>}></Route>
            <Route path="/videocard" element={<Videocard/>}></Route>
            <Route path="/videocard/:productId" element={<Product/>}></Route>
            <Route path="/cpu" element={<Cpu/>}></Route>
            <Route path="/cpu/:productId" element={<Product/>}></Route>
            <Route path="/motherboard" element={<Motherboard/>}></Route>
            <Route path="/motherboard/:productId" element={<Product/>}></Route>
        </Routes>
    )
}