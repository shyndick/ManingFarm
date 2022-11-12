import catalogCpuStore from "../stores//CatalogCpuStore"
import { useEffect } from "react"
import { observer } from "mobx-react-lite"

export const Cpu = observer(() => {

    const {manufacturerCpu,
        manufacturerCpuIndex,
        productsCpuByManufactur,
        setCpuManufactur,
        loadCpuManufacturer,
        loadCpuManufactur,
        isLoadingC} = catalogCpuStore

        useEffect(()=>{
            loadCpuManufacturer()
            loadCpuManufactur()
        }, [])
    
        useEffect(()=>{
            if(manufacturerCpu)
            loadCpuManufactur(manufacturerCpu[manufacturerCpuIndex])
        }, [manufacturerCpu, manufacturerCpuIndex])

    return(
        <>
            <div className="manufacturer">
                    {manufacturerCpu && manufacturerCpu.map((manufacturCpu, index) => 
                        <button onClick={()=>{setCpuManufactur(index)}} key={index} className='manufactur_btn'>{manufacturCpu}</button>
                    )
                }
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
        </>
    )
} 
)