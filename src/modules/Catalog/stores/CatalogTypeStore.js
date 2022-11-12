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

    // loadCpuManufactur = async(manufactur) => {
    //     this.isLoadingC = true
    //     const response = await fetch('http://localhost:3000/cpu')
    //     const json = await response.json()
    //     runInAction(() => {
    //         switch(manufactur) {
    //             case "products":
    //                 this.productsCpuByManufactur = json[0].products
    //                 console.log(this.productsCpuByManufactur)
    //                 this.isLoadingC = false
    //             break;
    //             case "AMD":
    //                 this.productsCpuByManufactur = json[0].AMD
    //                 console.log(this.productsCpuByManufactur)
    //                 this.isLoadingC = false
    //             break;
    //             case "Intel":
    //                 this.productsCpuByManufactur = json[0].Intel
    //                 console.log(this.productsCpuByManufactur)
    //                 this.isLoadingC = false
    //             break;
    //         }   
    //     })
    // }
}

const catalogTypeStore = new CatalogTypeStore()
export default catalogTypeStore