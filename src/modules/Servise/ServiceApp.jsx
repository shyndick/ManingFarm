import { Route, Routes } from "react-router-dom"
import { Ferm } from "./components/Ferm"
import { Maning } from "./components/Maning"
import { Servise } from "./Servise"



export const ServiceApp = () => {
    return(
        <Routes>
            <Route index path="/" element={<Servise/>}></Route>
            <Route path="/maning" element={<Maning/>}></Route>
            <Route path="/ferm" element={<Ferm/>}></Route>
        </Routes>
    )
}