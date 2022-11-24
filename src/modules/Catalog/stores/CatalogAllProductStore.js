import { makeAutoObservable, runInAction } from "mobx";
import {notification } from 'antd';

class CatalogAllProductStore{
    
    allProducts = undefined
    isLoadingP = false

    constructor() {
        makeAutoObservable(this)
    }

    loadAllProducts = async(pageId) => {
        try {
        this.isLoadingP = true
        // http://localhost:3000/allProduct?_sort=id&_order=asc? с сортировкой но без страниц
        const response = await fetch(`http://localhost:3000/allProduct?_page=${pageId}&_limit=30`)
        if(response.status >= 400) {
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }
        const json = await response.json()
            runInAction(() => {
                this.allProducts = [...json]
                this.isLoadingP = false
            })
        } catch (e) {
            console.log(e)
        }
    }
}

const catalogAllProductStore = new CatalogAllProductStore()
export default catalogAllProductStore