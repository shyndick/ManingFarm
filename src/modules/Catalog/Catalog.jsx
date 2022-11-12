import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import catalogVideocardStore from "./stores/CatalogVideocardStore"
import catalogCpuStore from "./stores/CatalogCpuStore"
import catalogMotherboardStore from "./stores/CatalogMotherboardStore"
import catalogTypeStore from "./stores/CatalogTypeStore"

export const Catalog = observer(() => {

    const {
        manufacturer,
        loadManufacturer,
        productsByManufactur,
        loadManufactur,
        manufacturerIndex,
        setManufactur,
        isLoading} = catalogVideocardStore

    const {manufacturerCpu,
        manufacturerCpuIndex,
        productsCpuByManufactur,
        setCpuManufactur,
        loadCpuManufacturer,
        loadCpuManufactur,
        isLoadingC} = catalogCpuStore

    const {
        manufacturerMotherboard,
        loadMotherboardManufacturer,
        productsMotherboardByManufactur,
        loadMotherboardManufactur,
        manufacturerMotherboardIndex,
        setMotherboardManufactur,
        isLoadingM} = catalogMotherboardStore

        const {type, isLoadingT, loadType} = catalogTypeStore

    useEffect(()=>{
        loadManufactur()
        loadManufacturer()
        loadCpuManufacturer()
        loadCpuManufactur()
        loadMotherboardManufactur()
        loadMotherboardManufacturer()
        loadType()
    }, [])

    useEffect(()=>{
        if(manufacturer)
        loadManufactur(manufacturer[manufacturerIndex])
    }, [manufacturer, manufacturerIndex])

    useEffect(()=>{
        if(manufacturerCpu)
        loadCpuManufactur(manufacturerCpu[manufacturerCpuIndex])
    }, [manufacturerCpu, manufacturerCpuIndex])

    useEffect(()=>{
        if(manufacturerMotherboard)
        loadMotherboardManufactur(manufacturerMotherboard[manufacturerMotherboardIndex])
    }, [manufacturerMotherboard, manufacturerMotherboardIndex])


    return (
        <main>
            <div className="container">

                <div className="manufacturer">
                    {type && type.map((manufactur, index) => 
                        <button onClick={index} key={index} className='manufactur_btn'>{manufactur}</button>
                    )
                }
                </div>

                <div className="manufacturer">
                    {manufacturer && manufacturer.map((manufactur, index) => 
                        <button onClick={()=>{setManufactur(index)}} key={index} className='manufactur_btn'>{manufactur}</button>
                    )
                }
                </div>

                <div className="manufacturer">
                    {manufacturerCpu && manufacturerCpu.map((manufacturCpu, index) => 
                        <button onClick={()=>{setCpuManufactur(index)}} key={index} className='manufactur_btn'>{manufacturCpu}</button>
                    )
                }
                </div>

                <div className="manufacturer">
                    {manufacturerMotherboard && manufacturerMotherboard.map((manufacturMotherboard, index) => 
                        <button onClick={()=>{setMotherboardManufactur(index)}} key={index} className='manufactur_btn'>{manufacturMotherboard}</button>
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

                    <div className="products_item">
                {isLoadingC && <h2>Loading....</h2>}
                {!isLoadingC && productsCpuByManufactur && productsCpuByManufactur.map((item, index) => 
                    <div key={index}>
                        <h3>{item.extended_name}</h3>
                        <h2>{item.name_prefix}</h2>
                        <div>{item.prices.price_min.amount}</div>
                    </div>)}

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
                </div>


            </div>
        </main>
    )
})