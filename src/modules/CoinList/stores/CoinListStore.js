import {makeAutoObservable} from "mobx"

export class CoinListStore {
    list = [];
    loading = true

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }

    loadLists() {
        fetch('https://api.coincap.io/v2/assets')
            .then(response => response.json())
            .then(json => {
                this.list = json.data
                this.loading = false
            })
    }
}