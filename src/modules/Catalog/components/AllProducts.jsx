import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import catalogAllProductStore from "../stores/CatalogAllProductStore"

export const AllProduct = observer(() => {

    const {allProducts, loadAllProducts, isLoadingP} = catalogAllProductStore

    useEffect(()=>{
        loadAllProducts()
    },[])

    return(
        <>
            <div className="products_items">
                {isLoadingP&& <h2>Loading....</h2>}
                {!isLoadingP && allProducts && allProducts.map((item, index) => 
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