import {GuaranteeText} from "./components/GuaranteeText"
import {ConsultationMain} from "../Main/components/ConsultationMain"
export const Guarantee = () => {
    return (
        <main>
            <div className="container">
            {window.scrollTo(0, 0)}
                <GuaranteeText/>
            </div>
            <ConsultationMain/>
        </main>
    )
}