import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  {CoinItem}  from "./components/CoinItem"
import {CoinStore} from "./srores/CoinStore"

export const Coin = observer(() => {

    const {id} = useParams()

    const [coinStore] = useState(new CoinStore())

    const {loadList, coinList, loading} = coinStore

    useEffect(() => {
        loadList(id)
    },[])


    return(
        <>  
            {loading && <div className="container coin_center"><div class="lds-circle"><div></div></div></div>
                
            }
            {coinList.id && !loading &&
            <div className="container">
                <h1 className="coin_title">{coinList.name}</h1>
                <CoinItem 
                    rank = {coinList.rank}
                    symbol = {coinList.symbol}
                    name = {coinList.name}
                    priceUsd = {coinList.priceUsd}
                    changePercent24Hr = {coinList.changePercent24Hr}
                    supply = {coinList.supply}
                    maxSupply = {coinList.maxSupply}
                    marketCapUsd = {coinList.marketCapUsd}
                    volumeUsd24Hr = {coinList.volumeUsd24Hr}
                    vwap24Hr = {coinList.vwap24Hr}/>
                
            </div>}
        </>
    )
})