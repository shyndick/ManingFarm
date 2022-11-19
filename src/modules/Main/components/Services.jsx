import { useNavigate } from "react-router-dom"

export const Services = () => {

    const navigate = useNavigate()

    const navigateService = window.location.pathname.toString()
    const navigateCatalog = window.location.pathname.toString().substring(0, 8)

    const goManing = () => {
        if(navigateService === '/servise')
        navigate('./maning')
        else  if (navigateService === '/') 
        navigate('./service/maning')
        else if(navigateCatalog === '/catalog')
        navigate('../../service/maning')
    }

    const goFerm = () => {
        console.log(window.location.pathname.toString())
        if(navigateService === '/servise')
        navigate('./ferm')
        else if (navigateService ===  '/')
        navigate('./service/ferm')
        else if(navigateCatalog === '/catalog')
        navigate('../../service/ferm')
    }

    

    return(
        <div className="services">
            <a onClick={goManing} className="services_item">
                <p>Майнинг под ключ</p>
            </a>
            <a onClick={goFerm} className="services_item">
                <p>Сборка ферм</p>
            </a>
        </div>
    )
}