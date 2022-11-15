import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import catalogVideocardStore from "../stores/CatalogVideocardStore"
import { CatalogProductCard } from "./CatalogProductCard"

export const VideocardItems = observer(() => {

    const {
        manufacturer,
        loadManufacturer,
        productsByManufactur,
        loadManufactur,
        isLoading} = catalogVideocardStore

        useEffect(()=>{
            loadManufactur()
            loadManufacturer()
        }, [])

    return(
        <>
            <div className="products_items">
                    <div className="products_item">
                {isLoading && <h2>Loading....</h2>}
                {!isLoading && productsByManufactur && productsByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
                    </div>
            </div>
        </>
    )
})
