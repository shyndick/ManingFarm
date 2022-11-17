
import { Best } from "../Main/components/Best"
import { Quality } from "../Main/components/Quality"
import { CompaniText } from "./components/CompaniText"



export const Contacts = () => {
    return(
        <main>
            <div className="container">
                <CompaniText/>
                <Quality/>
                <h2 className="contact_best">Проверенные временем производители</h2>
                <Best/>
            </div>
        </main>
    )
}