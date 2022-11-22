import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import catalogVideocardStore from "../../stores/CatalogVideocardStore"
import { CatalogProductCard } from "../../components/CatalogProductCard"
import Catalog from "../../components/Loader"

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
        <>  {window.scrollTo(0, 0)}
            <div className="products_items">
                    <div className="products_item">
                {isLoading && <Catalog/>}
                {!isLoading && productsByManufactur && productsByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
                    </div>
            </div>
        </>
    )
})
