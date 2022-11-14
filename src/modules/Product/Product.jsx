import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ProductStore} from "./stores/ProductStore"
import { Image } from 'antd';
import {GoBack} from '../Catalog/components/GoBack'

export const Product = observer(() => {

    const {productId} = useParams()
    const [productStore] = useState(new ProductStore())
    const {loadProduct, productData, idProductLoading} = productStore
    const {full_name, name_prefix, images, description, prices } = productData

    

    useEffect(()=> {
        if(productId) {
            loadProduct(productId)
        } 
    }, [])

    return(
        <div className="container">
            <GoBack/>
            {idProductLoading && <h2>Loading Product</h2>}
            {!idProductLoading && images && prices && <div className="product_wrapper">
                                        <h1>{full_name}</h1>
                                        <p>{name_prefix}</p>
                                        <p>{description}</p>
                                        <Image src={images.header} alt={full_name} />
                                        <p>от {prices.price_min.amount} р</p>
                                    </div>}
        </div>
    )
})