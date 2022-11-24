import {makeAutoObservable} from "mobx"
import { runInAction } from "mobx"

export class CoinStore {
    loading = true

    coinList = {}

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }

    loadList = async(id) => {
        
        try{
        const response = await fetch(`https://api.coincap.io/v2/assets/${id}`)
        if(response.json >= 400) {
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }    
        const json = await response.json()
        runInAction(() => {
            this.coinList = json.data
            this.loading = false})
        } catch (e) {
            console.log(e)
        }
    }
}
