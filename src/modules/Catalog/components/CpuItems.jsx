import catalogCpuStore from "../stores//CatalogCpuStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

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