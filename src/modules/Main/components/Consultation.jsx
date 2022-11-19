import { useNavigate } from "react-router-dom"

export const Consultation = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('./service/consultation')
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