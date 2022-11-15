import { makeAutoObservable, runInAction } from "mobx";

class CatalogAllProductStore{
    
    allProducts = undefined
    isLoadingP = false

    constructor() {
        makeAutoObservable(this)
    }

    loadAllProducts = async() => {
        this.isLoadingP = true
        const response = await fetch('http://localhost:3000/allProduct?_sort=id&_order=asc')
        const json = await response.json()
            runInAction(() => {
                this.allProducts = [...json]
                this.isLoadingP = false
            })
    }
}

const catalogAllProductStore = new CatalogAllProductStore()
export default catalogAllProductStore