export const Quality = () => {
    return(
        <div className="quality">
            <div className="quality_items">
                <div className="quality_item"><i className="fa fa-rocket" aria-hidden="true"></i></div>
                <div className="quality_item">
                    <p className="quality_item_title">Быстрая доставка</p>
                    <p className="quality_item_subtitle">Заказы доставляем в день обращения, оплата при получении</p>
                </div>
            </div>
            <div className="quality_items">
                <div className="quality_item"><i class="fa fa-star" aria-hidden="true"></i></div>
                <div className="quality_item">
                    <p className="quality_item_title">Лучшее качество</p>
                    <p className="quality_item_subtitle">Все наши товары гарантировано надежны в эксплуатации</p>
                </div>
            </div>
            <div className="quality_items">
                <div className="quality_item"><i class="fa fa-percent" aria-hidden="true"></i></div>
                <div className="quality_item">
                    <p className="quality_item_title">Скидка и бонусы</p>
                    <p className="quality_item_subtitle">Специальные предложения для наших постоянных клиентов</p>
                </div>
            </div>
        </div>
    )
}