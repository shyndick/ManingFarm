import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { CatalogProductCard } from "./CatalogProductCard"
import catalogMotherboardStore from "../stores/CatalogMotherboardStore"


export const MotherboardItems = observer(() => {

    const {loadMotherboardManufacturer,
        productsMotherboardByManufactur,
        loadMotherboardManufactur,
        isLoadingM} = catalogMotherboardStore

        useEffect(()=>{
            loadMotherboardManufactur()
            loadMotherboardManufacturer()
        }, [])

    return(
        <>
            <div className="products_items">
                {isLoadingM && <h2>Loading....</h2>}
                {!isLoadingM && productsMotherboardByManufactur && productsMotherboardByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
            </div>
        </>
    )
})