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
                    <div  key={index} className="catalog_item">
                        <div className="videocard_item_img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <h3><Link to={`./${item.id}`}>{item.title}</Link></h3>
                        <p>{item.category}</p>
                        <p>от {item.price} р</p>
                    </div>)}

                    </div>
            </div>
        </>
    )
})
