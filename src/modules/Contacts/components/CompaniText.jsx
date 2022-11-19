import Contact from "../../../image/contact.png"

export const CompaniText = () => {
    return(
    <>
        <div className="compani_wrapper">
                    <div className="compani_text">
                        <h1>Контакты</h1>
                        <div>
                            Заказать товар или получить консультацию можно ежедневно с 8:00 до 22:00.
                            <ul>Телефоны:
                                <li>+375 17 3-021-021</li>
                                <li>+375 29 3-021-021</li>
                                <li>+375 33 3-021-021</li>
                                <li>+375 25 5-021-021</li>
                            </ul>

                            

                            

                            
                        </div>

                    </div>
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />

                    </div>
                </div>
                <div className="compani_wrapper">
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />

                    </div>
                    <div className="compani_text">
                            <p> Онлайн-заказы через корзину принимаются ежедневно и круглосуточно!</p>
                            <p> Вы получите сообщение о подтверждении заказа в Viber или по смс на указанный номер телефона. Если же нам нужно будет уточнить у вас какие-либо детали по заказу — вам позвонит наш специалист.</p>
                        </div>

                </div>
                <div className="compani_wrapper">
                    
                    <div className="compani_text">
                        <p>Для заказов по безналичному расчёту просим использовать только корзину сайта.</p> 
                        <p> Если вам необходима консультация, обращайтесь по телефонам call-центра.</p>
                        <p> E-mail: beznal@minerbase.by</p>
                    </div>
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />
                    </div>

                </div>
                <div className="compani_wrapper">
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />
                    </div>
                    <div className="compani_text">
                        <p> По вопросам оптовых закупок пишите:</p>
                        <p> opt@minerbase.by</p>
                    </div>

                </div>

                <div className="compani_wrapper">
                <div className="compani_text">
                        <p> Если вы являетесь поставщиком или производителем товаров и хотите стать нашим партнером, присылайте ваши предложения:</p>
                            <p> supply@minerbase.by</p>
                    </div>
                    <div className="compani_img">
                        <img src={Contact} alt="contact" />
                    </div>
                    </div>
                <div className="compani_wrapper">
                <div className="compani_img">
                    <img src={Contact} alt="contact" />
                </div>
                <div className="compani_text">
                    <p> Контакты для прессы:</p>
                    <p> E-mail: info@minerbase.by</p>
                </div>

                </div>
            </>
    )
}