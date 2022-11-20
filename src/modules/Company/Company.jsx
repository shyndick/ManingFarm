
import { Best } from "../Main/components/Best"
import { ConsultationMain } from "../Main/components/ConsultationMain"
import { Quality } from "../Main/components/Quality"
import { CompanyText } from "./components/CompanyText"



export const Company = () => {
    return(
        <main>
            <div className="container">
                {window.scrollTo(0, 0)}
                <CompanyText/>
                <Quality/>
                <h2 className="contact_best">Проверенные временем производители</h2>
                <Best/>
            </div>
            <ConsultationMain/>
        </main>
    )
}