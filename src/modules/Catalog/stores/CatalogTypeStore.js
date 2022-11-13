import {makeAutoObservable, runInAction} from "mobx"

class CatalogTypeStore {


    type = undefined

    isLoadingT = false

    constructor () {
        makeAutoObservable(this)
    }
    

    loadType = async() => {
        const response = await fetch('http://localhost:3000/type')
        const json = await response.json()
            runInAction(() => {
                console.log(json)
                this.type = json
            })
    }
}

const catalogTypeStore = new CatalogTypeStore()
export default catalogTypeStore