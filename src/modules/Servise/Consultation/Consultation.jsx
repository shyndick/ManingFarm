import ModalService from "../components/ModalService"
import { ConsultationMain } from "../../Main/components/ConsultationMain"

export const Consultation = () => {
    return(
        <main>
            {window.scrollTo(0, 0)}
            <div className="consultationPage">
                <div className="container">
                    <div className="consultation_title">
                        <h1>Консультация</h1>
                    </div>
                    <div className="consultation_wrapper">
                        <div className="maning_item">
                            <div>
                                <h2 >Мы оказываем услуги по вопросам майнинга.</h2>
                                <ul>
                                    <li>Полный спектр консультаций, по оборудованию, алгоритмам, анализ рынка, вывод крипты и т.п.</li>
                                    <li>Подбор оборудования, заказ/выкуп для вас оборудования у проверенных поставщиков по специальным ценам.</li>
                                    <li>Удаленная настройка асиков, подбор сопутствующего оборудования и ПО.</li>
                                    <li>Обучение и сопровождение.</li>
                                    <li>Стоимость услуг индивидуальна, но не высока.</li>
                                    <li>Сработаем под любой разумный бюджет.</li>
                                </ul>
                            </div>
                        </div>
                        <ModalService/>
                    </div>
                </div>
                <ConsultationMain/>
            </div>
        </main>
    )
}