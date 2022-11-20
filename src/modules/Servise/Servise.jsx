import { ServiceItem } from "./components/ServiceItem"
import {Services} from "../Main/components/Services"

export const Servise = () => {
    
    return(
        <main>
            <div className="container">
                <h1>Услуги</h1>
                {window.scrollTo(0, 0)}
                <Services/>
                <div className="servise_wrapper">
                    <ServiceItem title={'Ремонт видеокарт'} subtitle={'Ремонт фермы'}/>
                    <ServiceItem title={'Разгон видеокарт'} subtitle={'Консультация'}/>
                </div>
                

                </div>
        </main>
    )
}