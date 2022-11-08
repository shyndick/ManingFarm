import { useEffect, useState } from "react"
import { json } from "react-router-dom"

export const CoinList = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://api.coincap.io/v2/assets')
                        .then(response => response.json())
                        .then(list => setList(list.data))
    }, [])

    return (
        
        <main>
            <div className="container">
                {console.log('render')}
                {console.log(list)}
                <h1>Курс крипты</h1>
                {list.length === 0 && <h2>Loading...</h2>}
                {list.length > 0 && list.map(item => <p key={item.id}>{item.rank} - {item.name} - {item.priceUsd
}</p>)}
            </div>
        </main>
    )
}