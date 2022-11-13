import { useNavigate} from "react-router-dom"

export const GoBack = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    
    return(
        <div className="go_back">
                <button onClick={goBack} className="manufactur_btn">назад</button>
        </div>
    )
}