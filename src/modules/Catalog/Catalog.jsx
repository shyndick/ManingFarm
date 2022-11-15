import { observer } from "mobx-react-lite"
import { useEffect} from "react"
import catalogTypeStore from "./stores/CatalogTypeStore"
import { CatalogButton } from "./components/CatalogButton"
import { AllProduct } from "./components/AllProducts"

export const Catalog = observer(() => {

        const {type, isLoadingT, loadType} = catalogTypeStore

    useEffect(()=>{
        loadType()
    }, [])

    return (
        <main>
            <div className="container">
                <div className="main_catalog_wrapper">
                    <CatalogButton/>
                    <div className="main_catalog_items">
                        <AllProduct/>
                    </div>
                </div>
            </div>
        </main>
    )
})