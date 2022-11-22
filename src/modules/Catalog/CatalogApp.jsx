import { Routes, Route } from "react-router-dom"
import { Catalog } from "./Catalog"
import { Product } from "./Product/Product"
import { Videocard } from "./Videocart/Videocard"
import { Cpu } from "./Cpu/Cpu"
import { Motherboard } from "./Motherboard/Motherboard"

export const CatalogApp = () => {
    return(
        <Routes>
            <Route index path="/" element={<Catalog/>}></Route>
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