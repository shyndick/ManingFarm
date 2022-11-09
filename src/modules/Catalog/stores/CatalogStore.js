import {makeAutoObservable} from "mobx"

class CatalogStore {

    categories = undefined

    constructor () {
        makeAutoObservable(this)
    }

    loadCategories = () => {
        fetch('../../../data/category.js')
        .then(respone => console.log(respone.json()))
        // .then(json => {
        //     console.log(json)
        //     this.categories = [...json]
        // })
    }
}

const catalogStore = new CatalogStore()
export default catalogStore