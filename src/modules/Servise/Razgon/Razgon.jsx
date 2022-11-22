import Ferma from "../../../image/service4.jpg"
import { ConsultationMain } from "../../Main/components/ConsultationMain"

export const Razgon = () => {
    return(
        <main>
            {window.scrollTo(0, 0)}
            <div className="container">
                <div className="pageRazgon">
                    
                    <h1>Разгон видеокарт</h1>
                    <div className="razgon_wrapper">
                        <div className="maning_item">
                            <h2>На нашу настройку и разгон мы даём гарантию 6 месяцев.</h2>
                            <ul>
                                <li>Гарантия распространяется на все наши услуги по настройке и разгону ПК.</li>
                                <li>При возникновении проблем с выставленными нами настройками и разгоном мы оперативно окажем гарантийную поддержку.</li>
                                <li>Гарантия аннулируется в случае самостоятельного изменения выставленных нами параметров в BIOS/UEFI и/или в программах настройки, а также в случае самостоятельного обновления BIOS/UEFI.</li>
                            </ul>
                        </div>
                        <div className="ferm_img">
                            <img src={Ferma} alt="Ремонт-фермы" />
                        </div>
                    </div>
                </div>
            </div>
            <ConsultationMain/>
        </main>
    )
}