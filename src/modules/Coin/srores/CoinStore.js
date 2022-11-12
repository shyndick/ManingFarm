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

    loadList(id) {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then(response => response.json())
            .then(json => {
                runInAction(() => {
                    this.coinList = json.data
                    this.loading = false
                })
                
            })
    }
}
