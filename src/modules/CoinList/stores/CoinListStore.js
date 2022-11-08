import {makeAutoObservable} from "mobx"

class CoinListStore {
    list = [];
    loading = true

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }

    loadList() {
        fetch('https://api.coincap.io/v2/assets')
            .then(response => response.json())
            .then(json => {
                this.list = json.data
                this.loading = false
            })
    }
}

const coinListStore = new CoinListStore()

export default coinListStore