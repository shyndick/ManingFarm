import catalogCpuStore from "../../stores/CatalogCpuStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { CatalogProductCard } from "../../components/CatalogProductCard"
import Catalog from "../../components/Loader"

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
        <>  {window.scrollTo(0, 0)}
            <div className="products_items">
                {isLoadingC && <Catalog/>}
                {!isLoadingC && productsCpuByManufactur && productsCpuByManufactur.map((item, index) => 
                    <CatalogProductCard key={index} productCard={item}/>)}
            </div>
        </>
    )
})