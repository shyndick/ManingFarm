import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
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
                    <div key={index} className="catalog_item">
                        <div className="catalog_item_img">
                            <img src={item.images.header} alt={item.name} />
                        </div>
                        <h3><Link to={`./${item.id}`}>{item.extended_name}</Link></h3>
                        <p>{item.micro_description}</p>
                        <p>от {item.prices.price_min.amount} р</p>
                    </div>)}
            </div>
        </>
    )
})