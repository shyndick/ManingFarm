import catalogTypeStore from "../stores/CatalogTypeStore"
import { observer } from "mobx-react-lite"
import { useEffect} from "react"
import { useNavigate } from "react-router-dom"

export const CatalogButton = observer(() => {

    const {type, isLoadingT, loadType} = catalogTypeStore

    useEffect(()=>{
        loadType()
    }, [])

    const navigate = useNavigate();

    const handleClickVideocard = () => {
        navigate(`./${type[0]}`)
    }

    const handleClickCpu = () => {
        navigate(`./${type[1]}`)
    }

    const handleClickMotherboard = () => {
        navigate(`./${type[2]}`)
    }

    return(
        <>
            <div className="manufacturer">
                <button onClick={handleClickVideocard} className='manufactur_btn'>Видеокарты</button>
                <button onClick={handleClickCpu} className='manufactur_btn'>Процессоры</button>
                <button onClick={handleClickMotherboard} className='manufactur_btn'>Материнские карты</button>

            </div>
        </>
    )
})