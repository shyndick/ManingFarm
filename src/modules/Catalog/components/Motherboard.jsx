import { useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { observer } from "mobx-react-lite"
import catalogMotherboardStore from "../stores/CatalogMotherboardStore"
import { MotherboardItems } from "./MotherboardItems"
import {GoBack} from "./GoBack"
import { CatalogButton } from "./CatalogButton"
import { MotherboardText } from "./MotherboardText"

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

                <div className="category_wrapper">
                    <h1>Материнские карты</h1>
                    <GoBack/>
                </div>

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
                <MotherboardText/>
            </div>
        </main>
    )
}
)