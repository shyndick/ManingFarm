import {observer} from "mobx-react-lite"
import { useEffect } from "react"
import coinListStore from "./stores/CoinListStore"

export const CoinList = observer(() => {

    const {list, loadList, loading} = coinListStore

    useEffect(() => {
        loadList()
    }, [])

    return (
        
        <main>
            {console.log(list)}
            <div className="container">
                <h1 className="coin_title">Курс крипты</h1>
                <div  className="coin_list_name">
                    <div className="coin_list_name_item">Название</div>
                    <div className="coin_list_name_item">Объем(24ч), $</div>
                    <div className="coin_list_name_item">Рыночная капитализация, $</div>
                    <div className="coin_list_name_item">Изменение 24ч, %</div>
                    <div className="coin_list_name_item">Цена, $</div>
                </div>
                {loading && <h2>Loading...</h2>}
                {!loading && list.map(item => 
                    <div key={item.id} className="coin_list">
                        <div className="coin_list_item">{item.name}</div>
                        <div className="coin_list_item">{item.volumeUsd24Hr} $</div>
                        <div className="coin_list_item">{item.marketCapUsd} $</div>
                        <div className="coin_list_item">{item.changePercent24Hr} %</div>
                        <div className="coin_list_item">{item.priceUsd} $</div>
                    </div>
                )}
            </div>
        </main>
    )
})
