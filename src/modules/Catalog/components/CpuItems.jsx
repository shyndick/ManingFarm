import catalogCpuStore from "../stores//CatalogCpuStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { CatalogProductCard } from "./CatalogProductCard"

export const CpuItems = observer(() => {

    const {} = catalogCpuStore

    const {productsCpuByManufactur,
        loadCpuManufacturer,
        loadCpuManufactur,
        isLoadingC} = catalogCpuStore

    useEffect(()=>{
        loadCpuManufacturer()
        loadCpuManufactur()
    }, [])

    return(
        <>
            <div className="products_items">
                {isLoadingC && <h2>Loading....</h2>}
                {!isLoadingC && productsCpuByManufactur && productsCpuByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
            </div>
        </>
    )
})