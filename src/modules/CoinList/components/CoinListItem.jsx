import { useNavigate } from "react-router-dom"

export const CoinListItem = ({id, name, volumeUsd24Hr, marketCapUsd, changePercent24Hr, priceUsd}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`./${id}`)
    }

    return(
        <div key={id} className="coin_list" onClick={handleClick}>
            <div className="coin_list_item">{name}</div>
            <div className="coin_list_item">{Math.floor(volumeUsd24Hr * 1000) / 1000 } $</div>
            <div className="coin_list_item">{Math.floor(marketCapUsd * 1000) / 1000 } $</div>
            <div className="coin_list_item">{Math.floor(changePercent24Hr * 1000) / 1000 } %</div>
            <div className="coin_list_item">{Math.floor(priceUsd * 1000) / 1000 } $</div>
        </div>
)
}
