import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import catalogVideocardStore from "../stores/CatalogVideocardStore"
import { Link } from "react-router-dom"

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
                    <div key={index} className="catalog_item">
                    <div className="catalog_item_img">
                        <img src={item.images.header} alt={item.name} />
                    </div>
                    <h3><Link to={`./${item.id}`}>{item.extended_name}</Link></h3>
                    <p>{item.micro_description}</p>
                    <p>от {item.prices.price_min.amount} р</p>
                </div>)}

                    </div>
            </div>
        </>
    )
})
