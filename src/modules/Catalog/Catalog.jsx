import { observer } from "mobx-react-lite"
import { useEffect} from "react"
import catalogTypeStore from "./stores/CatalogTypeStore"
import { VideocardItems } from "./components/VideocardItems"
import { MotherboardItems } from "./components/MotherboardItems"
import { CpuItems } from "./components/CpuItems"
import { CatalogButton } from "./components/CatalogButton"

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
                        <VideocardItems/>
                        <CpuItems/>
                        <MotherboardItems/>
                    </div>
                </div>
            </div>
        </main>
    )
})