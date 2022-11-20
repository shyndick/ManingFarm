import { makeAutoObservable, runInAction } from "mobx";

class CatalogAllProductStore{
    
    allProducts = undefined
    isLoadingP = false

    constructor() {
        makeAutoObservable(this)
    }

    loadAllProducts = async(pageId) => {
        this.isLoadingP = true
        console.log(pageId)
        // http://localhost:3000/allProduct?_sort=id&_order=asc? с сортировкой но без страниц
        const response = await fetch(`http://localhost:3000/allProduct?_page=${pageId}&_limit=30`)
        const json = await response.json()
            runInAction(() => {
                this.allProducts = [...json]
                console.log(this.allProducts)
                this.isLoadingP = false
            })
    }
}

const catalogAllProductStore = new CatalogAllProductStore()
export default catalogAllProductStore