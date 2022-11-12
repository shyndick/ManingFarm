import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import catalogVideocardStore from "./stores/CatalogVideocardStore"
import catalogCpuStore from "./stores/CatalogCpuStore"
import catalogMotherboardStore from "./stores/CatalogMotherboardStore"
import catalogTypeStore from "./stores/CatalogTypeStore"
import { Videocard } from "./components/Videocard"
import { Cpu } from "./components/Cpu"
import { Motherboard } from "./components/Motherboard"

export const Catalog = observer(() => {

        const {type, isLoadingT, loadType} = catalogTypeStore

    useEffect(()=>{
        loadType()
    }, [])


    return (
        <main>
            <div className="container">

                <div className="manufacturer">
                    {type && type.map((manufactur, index) => 
                        <button key={index} className='manufactur_btn'>{manufactur}</button>
                    )
                }
                </div>
                    <Videocard/>
                    <Cpu/>
                    <Motherboard/>

            </div>
        </main>
    )
})