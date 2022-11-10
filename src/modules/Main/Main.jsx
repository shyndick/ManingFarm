
import { MainWindow } from "./components/MainWindow"
import { Quality } from "./components/Quality"
import { Best } from "./components/Best"
import { Services } from "./components/Services"
import { Consultation } from "./components/Consultation"

export const Main = () => {
    
    return(
        <main>
            <div className="container">
                <MainWindow/>
                <Quality/>         
                <h2 className="the_best">От лучших производителей</h2>
                <Best/>
                <h2 className="the_best">Услуги</h2>
                <Services/>
            </div>
            <Consultation/>

        </main>
    )
}