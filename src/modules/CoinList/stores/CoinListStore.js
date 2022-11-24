import {makeAutoObservable, runInAction} from "mobx"
import {notification } from 'antd';

export class CoinListStore {
    list = [];
    loading = true

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }

    loadLists = async() => {
        try{
        const response = await fetch('https://api.coincap.io/v2/assets')
        if(response.json >= 400) {
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }    
        const json = await response.json()
        runInAction(() => {
            this.list = json.data
            this.loading = false})
        } catch (e) {
            console.log(e)
        }
    }
}
