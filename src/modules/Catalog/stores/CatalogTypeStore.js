import {makeAutoObservable, runInAction} from "mobx"
import {notification } from 'antd';

class CatalogTypeStore {


    type = undefined

    isLoadingT = false

    constructor () {
        makeAutoObservable(this)
    }
    

    loadType = async() => {
        try {
        const response = await fetch('http://localhost:3000/type')
        if(response.status >=400) {
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }
        const json = await response.json()
            runInAction(() => {
                this.type = json
            })
        } catch (e) {
            console.log(e)
        }
    }
}

const catalogTypeStore = new CatalogTypeStore()
export default catalogTypeStore