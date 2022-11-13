import { useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { observer } from "mobx-react-lite"
import catalogMotherboardStore from "../stores/CatalogMotherboardStore"
import { MotherboardItems } from "./MotherboardItems"
import {GoBack} from "./GoBack"
import { CatalogButton } from "./CatalogButton"

export const Motherboard = observer(() => {



    const {
        manufacturerMotherboard,
        loadMotherboardManufactur,
        manufacturerMotherboardIndex,
        setMotherboardManufactur} = catalogMotherboardStore

        useEffect(()=>{
            if(manufacturerMotherboard)
            loadMotherboardManufactur(manufacturerMotherboard[manufacturerMotherboardIndex])
        }, [manufacturerMotherboard, manufacturerMotherboardIndex])

    return(
        <main>
            <div className="container">
                <GoBack/>

                <div className="manufacturer_wrapper">

                    <div className="manufacturer">
                            {manufacturerMotherboard && manufacturerMotherboard.map((manufacturMotherboard, index) => 
                                <button onClick={()=>{setMotherboardManufactur(index)}} key={index} className='manufactur_btn'>{manufacturMotherboard}</button>
                            )
                        }
                    </div>

                    <div className="cpu_wrapper">
                        <MotherboardItems/>
                    </div>

                </div>
            </div>
        </main>
    )
}
)