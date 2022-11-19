import Contact from "../../../image/contact.png"

export const CompanyText = () => {
    return(
    <>
        <div className="compani_wrapper">
                    <div className="compani_text">
                        <h1>О компании</h1>
                        <div>Miner Base занимается закупкой, транспортировкой и продажей майнингового оборудования из Китайской Народной Республики и Гонконга. Наша компания сотрудничает с производителями майнеров напрямую и является поставщиком для крупных заказчиков по всему миру. Мы не только организуем логистику, но и предоставляем клиентам возможность хостинга.
                        Miner Base может обеспечить организацию вашего бизнеса под ключ.
                        Мы:
                        <ul>
                            <li>закупим оборудование, быстро доставим его и проведем через таможню;</li>
                            <li>обеспечим грамотную настройку;</li>
                            <li>сопроводим доставку необходимой документацией, в том числе грузовыми таможенными декларациями Российской Федерации и Республики Беларусь;</li>
                            <li>в случае размещения в одном из майнинг-отелей гарантируем постоянный климатический и энергетический контроль над майнером или фермой, надежную охрану и регулярное техобслуживание.</li>
                        </ul>
                        Miner Base — компания, которая дорожит своей репутацией. Мы сотрудничаем только с проверенными поставщиками, а все компетенции на нашей стороне подтверждаются довольными клиентами. Каждый клиент — колоссальная ценность для нашей компании, мы бережно относимся не только к вашему оборудованию, но и к вашему бюджету.
                        </div>

                    </div>
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />
                        <h2>На связи 24/7!</h2>
                    </div>
                </div>
                

            </>
    )
}