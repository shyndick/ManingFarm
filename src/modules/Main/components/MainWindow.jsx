import { useNavigate } from "react-router-dom"

export const MainWindow = () => {

    const navigate = useNavigate()

    const goCatalog = () => {
        navigate('/catalog')
    }

    return(
        <div className="main_window">
            <div className="window_catalog">
                <div className="window_catalog_title">Видео карты для майнинга</div>
                <div className="window_catalog_subtitle">от 2000 р</div>
                <button onClick={goCatalog} className="main_window_btn">Поподробнее</button>
            </div>
            <div className="windows_services">
                <div className="windows_services_item">
                    <div className="window_services_title">Доверяй профессионалам</div>
                    <div className="window_services_subtitle">Профессинальная консультация и проработка стратегий майнинга</div>
                    <button className="main_window_btn main_services_btn">Поподробнее</button>
                </div>
                <div className="windows_services_item">
                    <div className="window_services_title">Майнинг под ключ</div>
                    <div className="window_services_subtitle">Полный комплекс услуг по подбору и проведению  консультации по майнингу</div>
                    <button className="main_window_btn main_services_btn">Поподробнее</button>
                </div>
            </div>
        </div>
    )
}