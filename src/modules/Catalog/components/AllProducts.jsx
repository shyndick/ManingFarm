import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import catalogAllProductStore from "../stores/CatalogAllProductStore"
import cartStore from "../../Cart/stores/CartStore"
import { CatalogProductCard } from "./CatalogProductCard"

export const AllProduct = observer(() => {

    const {addToCart, cart} = cartStore

    const {allProducts, loadAllProducts, isLoadingP} = catalogAllProductStore

    useEffect(()=>{
        loadAllProducts()
    },[])

    return(
        <>
            <div className="products_items">
                {isLoadingP&& <h2>Loading....</h2>}
                {!isLoadingP && allProducts && allProducts.map((item, index) => <CatalogProductCard key={index} productCard={item}/>)}
            </div>
        </>
    )
})