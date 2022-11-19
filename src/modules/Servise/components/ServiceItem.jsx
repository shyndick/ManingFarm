import { useNavigate } from "react-router-dom"

        export const ServiceItem = ({title, subtitle}) => {

            const navigate = useNavigate()

            const goPageTitle = () => {
                switch(title) {
                    case 'Ремонт видеокарт': 
                    navigate('./remont')
                    break;
                    case 'Разгон видеокарт':
                    navigate('./razgon')
                    break;
                }
            }

            const goPageSubtitle = () => {
                switch(subtitle) {
                    case 'Ремонт фермы': 
                    navigate('./remont-ferm')
                    break;
                    case 'Консультация':
                    navigate('./consultation')
                    break;
                }
            }

            return(
                <div className="services">
                    <a onClick={goPageTitle} className="services_item">
                        <p>{title}</p>
                    </a>
                    <a onClick={goPageSubtitle} className="services_item">
                        <p>{subtitle}</p>
                    </a>
                </div>
            )
        }
