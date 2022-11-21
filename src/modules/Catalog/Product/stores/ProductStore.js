import { makeAutoObservable, runInAction } from "mobx";
import {notification } from 'antd';

export class ProductStore {

    productData = {}
    idProductLoading = false

    constructor() {
        makeAutoObservable(this)
        }
        loadProduct = async (productId, count) => {
            this.idProductLoading = true
            console.log(productId)
            try {
            const response = await fetch(`http://localhost:3000/allProduct?id=${productId}`)

            if(response.status >= 400) {
                notification.error({
                    message: response.status,
                    description: response.statusText
                })
                throw new Error (response)
            }
            const json = await response.json()
            runInAction(()=>{
                console.log(this.productData)
                this.productData = {...json[0]}
                if(count)  this.productData.count = count
                else  this.productData.count = 1
                this.idProductLoading = false
            })
        } catch (e) {
            //code
        }finally {
            //code
        }
    }
}
