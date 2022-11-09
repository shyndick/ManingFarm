export const CoinItem = ({name, symbol, rank, priceUsd, changePercent24Hr, supply, maxSupply, marketCapUsd, volumeUsd24Hr, vwap24Hr}) => {
    return (
        <div className="coin">
                    <div className="coin_item">
                        <div className="coin_name">Название</div>
                        <div className="coin_data">{name}</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Ранг</div>
                        <div className="coin_data">{rank}</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Цена</div>
                        <div className="coin_data">{Math.floor(priceUsd * 1000) / 1000 } $</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Индефикация на бирже</div>
                        <div className="coin_data">{symbol}</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Изменение за 24ч</div>
                        <div className="coin_data">{Math.floor(changePercent24Hr * 1000) / 1000 } %</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Оборотное предложение</div>
                        <div className="coin_data">{Math.floor(supply * 1000) / 1000 } $</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Максимальное оборотное предложение</div>
                        <div className="coin_data">{Math.floor(maxSupply * 1000) / 1000 } $</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Рыночная капитализация</div>
                        <div className="coin_data">{Math.floor(marketCapUsd * 1000) / 1000 } $</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Объем 24ч</div>
                        <div className="coin_data">{Math.floor(volumeUsd24Hr * 1000) / 1000 } $</div>
                    </div>
                    <div className="coin_item">
                        <div className="coin_name">Средний объем 24ч</div>
                        <div className="coin_data">{Math.floor(vwap24Hr * 1000) / 1000 } $</div>
                    </div>
                </div>
    )
}