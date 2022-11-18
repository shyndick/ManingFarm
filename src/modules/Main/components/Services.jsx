import { useNavigate } from "react-router-dom"

export const Services = () => {

    const navigate = useNavigate()

    const goManing = () => {
        console.log(window.location.pathname.toString())
        if(window.location.pathname.toString() === '/servise')
        navigate('./maning')
        else navigate('./service/maning')
    }

    const goFerm = () => {
        console.log(window.location.pathname.toString())
        if(window.location.pathname.toString() === '/servise')
        navigate('./ferm')
        else navigate('./service/ferm')
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