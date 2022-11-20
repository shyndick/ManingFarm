import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { CatalogProductCard } from "./CatalogProductCard"
import catalogMotherboardStore from "../stores/CatalogMotherboardStore"
import Catalog from "./Loader"


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
        <>  {window.scrollTo(0, 0)}
            <div className="products_items">
                {isLoadingM && <Catalog/>}
                {!isLoadingM && productsMotherboardByManufactur && productsMotherboardByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
            </div>
        </>
    )
})