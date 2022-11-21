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
import { ConsultationMain } from "../../Main/components/ConsultationMain";
import { Services } from "../../Main/components/Services";


export const Product = observer(() => {

    const {productId} = useParams()
    const [productStore] = useState(new ProductStore())
    const {loadProduct, productData, idProductLoading} = productStore
    const {full_name, reviews, images, description, prices, extended_name} = productData
    const {addToCart, cart} = cartStore

    const [count, setCount] = useState(1)

    const handleClickPlus = () => {
        setCount(count+1)
    }

    const handleClickMinus = () => {
        if(count > 1) setCount(count-1)
    }

    const handleClick = () => {
        addToCart(productData, count)
    }


    useEffect(()=> {
        console.log(productId)
        if(productId || count) {
            console.log(productId)
            loadProduct(productId, count)
        } 
    }, [])

    

    return(
        <main>
        <div className="container">
            {window.scrollTo(0, 0)}
            {idProductLoading && <div className="container coin_center"><div className="lds-circle"><div></div></div></div>}
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
                                                        <CartCount handleClickPlus={handleClickPlus} handleClickMinus={handleClickMinus} count={count}/>
                                                    </div>
                                                    
                                                </div>
                                                
                                            </div>

                                    </div>}
                                    <ProductText/>
                                    <Services/>
        </div>
        <ConsultationMain/>
        </main>
    )
})