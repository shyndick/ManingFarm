import { useNavigate } from "react-router-dom"

export const ConsultationMain = () => {

    const navigate = useNavigate()

    const navigatePage = window.location.pathname.toString()

    const handleClick = () => {
        if(navigatePage !== '/') navigate('/../../../service/consultation')
        else navigate('/service/consultation')
}



    return(
        <div className="consultation">
                <div className="container">
                    <div className="consultation_item">
                        <h2>Нужна консультация?</h2>
                        <p>Задача организации, в особенности же рамки  и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений</p>
                        <button onClick={handleClick} className="main_window_btn main_services_btn">Перейти</button>
                    </div>
                </div>
            </div>
    )
}