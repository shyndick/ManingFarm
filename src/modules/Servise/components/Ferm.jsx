import Ferma from "../../../image/service.jpg"
import { ConsultationMain } from "../../Main/components/ConsultationMain"

export const Ferm = () => {
    return(
        <main>
            {window.scrollTo(0, 0)}
            <div className="container">
                <div className="fermPage">
                    <h1>Сборка ферм</h1>
                    <div className="ferm_wrapper">
                        <div className="maning_item">
                            <h2>Сборка и настройка фермы</h2>
                            <p>Фермы собирают только квалифицированные специалисты, которые:</p>
                            <ul>
                                <li>Устанавливают необходимые драйверы</li>
                                <li>Перепрошивают и “разгоняют” видеокарты</li>
                                <li>Проверяют стабильность работы</li>
                            </ul>
                            <p>Твоя ферма будет работать с максимальной эффективностью.</p>
                        </div>
                        <div className="ferm_img">
                            <img src={Ferma} alt="ферма" />
                        </div>
                    </div>
                </div>
            </div>
            <ConsultationMain/>
        </main>
    )
}