import {makeAutoObservable, runInAction} from "mobx"

class CatalogStore {

    categories = undefined
    categoryIndex = 0
    productsByCategory = undefined

    manufacturer = undefined

    constructor () {
        makeAutoObservable(this)
    }

    setCategory = (index) => {
        this.categoryIndex = index
    }

    loadCategories = async() => {
        const response = await fetch('http://localhost:3000/category')
        const json = await response.json()
            runInAction(() => {
                this.categories = [...json]
            })
    }

    loadCategory = async(category) => {
        console.log(category)
        const response = await fetch(`http://localhost:3000/${category}`)
        const json = await response.json()
            runInAction(() => {
                console.log(json)
                this.productsByCategory = [...json]
            })
    }

    loadManufacturer = async() => {
        const response = await fetch('http://localhost:3000/manufacturer')
        const json = await response.json()
            runInAction(() => {
                this.manufacturer = [...json]
            })
    }
}

const catalogStore = new CatalogStore()
export default catalogStore