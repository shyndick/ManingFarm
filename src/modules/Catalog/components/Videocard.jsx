import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import catalogVideocardStore from "../stores/CatalogVideocardStore"

export const Videocard = observer(() => {

    const {
        manufacturer,
        loadManufacturer,
        productsByManufactur,
        loadManufactur,
        manufacturerIndex,
        setManufactur,
        isLoading} = catalogVideocardStore

        useEffect(()=>{
            loadManufactur()
            loadManufacturer()
        }, [])
    
        useEffect(()=>{
            if(manufacturer)
            loadManufactur(manufacturer[manufacturerIndex])
        }, [manufacturer, manufacturerIndex])

    return(
        <>
            <div className="manufacturer">
                    {manufacturer && manufacturer.map((manufactur, index) => 
                        <button onClick={()=>{setManufactur(index)}} key={index} className='manufactur_btn'>{manufactur}</button>
                    )
                }
            </div>
            <div className="products_items">
                    <div className="products_item">
                {isLoading && <h2>Loading....</h2>}
                {!isLoading && productsByManufactur && productsByManufactur.map((item, index) => 
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <h2>{item.category}</h2>
                        <div>{item.price}</div>
                    </div>)}

                    </div>
            </div>
        </>
    )
}
)