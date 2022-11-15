import { useNavigate} from "react-router-dom"

export const GoBack = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    
    return(
        <div className="go_back">
                <button onClick={goBack} className='back'><i className="fa fa-undo" aria-hidden="true"></i></button>
        </div>
    )
}