import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import {VideocardItems} from "./VideocardItems"
import catalogVideocardStore from "../stores/CatalogVideocardStore"
import { GoBack } from "./GoBack"

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
        <main>

            <div className="container">

                <GoBack/>

                <div className="manufacturer_wrapper">
                    <div className="manufacturer">
                            {manufacturer && manufacturer.map((manufactur, index) => 
                                <button onClick={()=>{setManufactur(index)}} key={index} className='manufactur_btn'>{manufactur}</button>
                            )
                        }
                    </div>
                    <div className="cpu_wrapper">
                        <VideocardItems/>
                    </div>
                </div>
                
            </div>
        </main>
    )
}
)