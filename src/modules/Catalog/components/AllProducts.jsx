
import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import catalogAllProductStore from "../stores/CatalogAllProductStore"
import { CatalogProductCard } from "./CatalogProductCard"
import App from "./Pagination"
import Catalog from "./Loader"

export const AllProduct = observer(() => {


    const {allProducts, loadAllProducts, isLoadingP} = catalogAllProductStore

    useEffect(()=>{
        loadAllProducts()
    },[])

    return(
        <>  {window.scrollTo(0, 0)}
            <div className="products_items">
                {isLoadingP && <Catalog/>}
                {!isLoadingP && allProducts && allProducts.map((item, index) => <CatalogProductCard key={index} productCard={item}/>)}
            </div>
            <App/>
        </>
    )
})