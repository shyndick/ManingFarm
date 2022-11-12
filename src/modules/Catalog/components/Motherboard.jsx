import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import catalogMotherboardStore from "../stores/CatalogMotherboardStore"

export const Motherboard = observer(() => {

    const {
        manufacturerMotherboard,
        loadMotherboardManufacturer,
        productsMotherboardByManufactur,
        loadMotherboardManufactur,
        manufacturerMotherboardIndex,
        setMotherboardManufactur,
        isLoadingM} = catalogMotherboardStore

        useEffect(()=>{
            loadMotherboardManufactur()
            loadMotherboardManufacturer()
        }, [])

        useEffect(()=>{
            if(manufacturerMotherboard)
            loadMotherboardManufactur(manufacturerMotherboard[manufacturerMotherboardIndex])
        }, [manufacturerMotherboard, manufacturerMotherboardIndex])
    

    return(
        <>
            <div className="manufacturer">
                    {manufacturerMotherboard && manufacturerMotherboard.map((manufacturMotherboard, index) => 
                        <button onClick={()=>{setMotherboardManufactur(index)}} key={index} className='manufactur_btn'>{manufacturMotherboard}</button>
                    )
                }
            </div>

            <div className="products_item">
                {isLoadingM && <h2>Loading....</h2>}
                {!isLoadingM && productsMotherboardByManufactur && productsMotherboardByManufactur.map((item, index) => 
                    <div key={index}>
                        <h3>{item.extended_name}</h3>
                        <h2>{item.name_prefix}</h2>
                        <div>{item.prices.price_min.amount}</div>
                    </div>)}
            </div>
        </>
    )
}
)