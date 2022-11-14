import { makeAutoObservable, runInAction } from "mobx";
import {notification } from 'antd';

export class ProductStore {

    productData = {}
    idProductLoading = false

    constructor() {
        makeAutoObservable(this)
        }
        loadProduct = async (productId) => {
            this.idProductLoading = true
            try {
            const response = await fetch(`http://localhost:3000/allProduct?id=${productId}`)

            if(response.status >= 400) {
                console.log(response)
                notification.error({
                    message: response.status,
                    description: response.statusText
                })
                throw new Error (response)
            }
            const json = await response.json()
            runInAction(()=>{
                this.productData = json[0]
                console.log(this.productData)
                this.idProductLoading = false
            })
        } catch (e) {
            
        }finally {
            //code
        }
    }
}
