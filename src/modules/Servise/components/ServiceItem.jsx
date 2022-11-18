
        export const ServiceItem = ({title, subtitle}) => {
            return(
                <div className="services">
                    <a className="services_item">
                        <p>{title}</p>
                    </a>
                    <a className="services_item">
                        <p>{subtitle}</p>
                    </a>
                </div>
            )
        }
