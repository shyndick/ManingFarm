import { useParams } from "react-router-dom"

export const Product = () => {

    const {productId} = useParams()
    console.log(productId)

    return(
        <h2>
            Product
        </h2>
    )
}