import { Route, Routes } from "react-router-dom"
import { Ferm } from "./Ferm/Ferm"
import { Maning } from "./Maning/Maning"
import { Remont } from "./Remont/Remont"
import { RemontFerm } from "./RemontFerm/RemontFerm"
import { Servise } from "./Servise"
import { Razgon } from "./Razgon/Razgon"
import { Consultation } from "./Consultation/Consultation"



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