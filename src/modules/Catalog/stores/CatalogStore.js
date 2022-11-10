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
        const response = await fetch('http://localhost:3000/videocard')
        const json = await response.json()
            runInAction(() => {
                console.log(json[0].category)
                this.categories = json[0].category
                console.log(this.categories)
            })
    }

    loadCategory = async(categor) => {
        console.log(categor)
        const response = await fetch(`http://localhost:3000/videocard`)
        const json = await response.json()
            runInAction(() => {
                this.productsByCategory = json[0].categor

                console.log(this.productsByCategory)
            })
    }

    loadManufacturer = async() => {
        const response = await fetch('http://localhost:3000/videocard')
        const json = await response.json()
            runInAction(() => {
                this.manufacturer = json[0].manufacturer
                console.log(this.manufacturer)
            })
    }
}

const catalogStore = new CatalogStore()
export default catalogStore