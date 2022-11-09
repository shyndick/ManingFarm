import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import  {CoinItem}  from "./components/CoinItem"
import {CoinStore} from "./srores/CoinStore"

export const Coin = observer(() => {

    const {id} = useParams()

    const navigate = useNavigate()

    const [coinStore] = useState(new CoinStore())

    const {loadList, coinList, loading} = coinStore

    useEffect(() => {
        loadList(id)
    },[id])

    const goBack = () => {
        navigate('../coin-list')
    }


    return(
        <main>  
            {loading && <div className="container coin_center"><div className="lds-circle"><div></div></div></div>}
            {coinList.id && !loading &&
            <div className="container">
                <div className="coin_title_back">
                    <h1 className="coin_title">{coinList.name}</h1>
                    <button onClick={goBack} className='back'><i className="fa fa-undo" aria-hidden="true"></i></button>
                </div>
                
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
        </main>
    )
})