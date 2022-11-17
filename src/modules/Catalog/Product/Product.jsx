import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ProductStore} from "./stores/ProductStore"
import { Image } from 'antd';
import {GoBack} from '../components/GoBack'
import cartStore from "../../Cart/stores/CartStore";
import App from "./components/Rating";
import {CartCount} from "./components/Count"
import { ProductText } from "./components/ProductText";
import { Consultation } from "../../Main/components/Consultation";
import { Services } from "../../Main/components/Services";


export const Product = observer(() => {

    const {productId} = useParams()
    const [productStore] = useState(new ProductStore())
    const {loadProduct, productData, idProductLoading} = productStore
    const {full_name, reviews, images, description, prices, extended_name} = productData
    const {addToCart, cart} = cartStore

    const handleClick = () => {
        addToCart(productData)
    }

    useEffect(()=> {
        if(productId) {
            loadProduct(productId)
        } 
    }, [])

    return(
        <main>
        <div className="container">
            
            {idProductLoading && <h2>Loading Product</h2>}
            {!idProductLoading && images && prices && <div className="product_wrapper">
                                            
                                            <div className="product_items">
                                                <div className="product_img">
                                                    <Image src={images.header} alt={full_name} />
                                                </div>
                                                <div className="product_info">
                                                    <div className="rating_goback">
                                                        <App reviews={reviews}/>
                                                        <GoBack/>
                                                    </div>
                                                    
                                                    <h2>{extended_name}</h2>
                                                    <p className="product_info_description">{description}</p>
                                                    <p className="product_info_price">{prices.price_min.amount} BYN</p>
                                                    <div className="product_btn_one">
                                                        <button onClick={handleClick} className="add_to_card">Добавить в корзину</button>
                                                        <CartCount/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>

                                    </div>}
                                    <ProductText/>
                                    <Services/>
        </div>
        <Consultation/>
        </main>
    )
})