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

    const navigateCatalog = window.location.pathname.toString().substring(0, 8)

    const handleClickVideocard = () => {
        console.log(navigateCatalog)
        if(navigateCatalog === '/catalog')
        navigate(`./${type[0]}`)
        else navigate(`./catalog/${type[0]}`)
    }

    const handleClickCpu = () => {
        if(navigateCatalog === '/catalog')
        navigate(`./${type[1]}`)
        else navigate(`./catalog/${type[1]}`)
    }

    const handleClickMotherboard = () => {
        if(navigateCatalog === '/catalog')
        navigate(`./${type[2]}`)
        else navigate(`./catalog/${type[2]}`)
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