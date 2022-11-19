import { Route, Routes } from "react-router-dom"
import { Ferm } from "./components/Ferm"
import { Maning } from "./components/Maning"
import { Remont } from "./components/Remont"
import { RemontFerm } from "./components/RemontFerm"
import { Servise } from "./Servise"
import { Razgon } from "./components/Razgon"
import { Consultation } from "./components/Consultation"



export const ServiceApp = () => {
    return(
        <Routes>
            <Route index path="/" element={<Servise/>}></Route>
            <Route path="/maning" element={<Maning/>}></Route>
            <Route path="/ferm" element={<Ferm/>}></Route>
            <Route path="/remont" element={<Remont/>}></Route>
            <Route path="/remont-ferm" element={<RemontFerm/>}></Route>
            <Route path="/razgon" element={<Razgon/>}></Route>
            <Route path="/consultation" element={<Consultation/>}></Route>
        </Routes>
    )
}