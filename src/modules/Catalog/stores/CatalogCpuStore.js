import {makeAutoObservable, runInAction} from "mobx"

class CatalogCpuStore {


    manufacturerCpu = undefined
    manufacturerCpuIndex = 0
    productsCpuByManufactur = undefined

    isLoadingC = false

    constructor () {
        makeAutoObservable(this)
    }

    setCpuManufactur = (index) => {
        this.manufacturerCpuIndex = index
    }
    

    loadCpuManufacturer = async() => {
        const response = await fetch('http://localhost:3000/cpu')
        const json = await response.json()
            runInAction(() => {
                this.manufacturerCpu = json[0].manufacturer
            })
    }

    loadCpuManufactur = async(manufactur) => {
        console.log(this.manufacturerCpuIndex)
        this.isLoadingC = true
        const response = await fetch('http://localhost:3000/cpu')
        const json = await response.json()
        console.log(json)
        runInAction(() => {
            switch(manufactur) {
                case "products":
                    this.productsCpuByManufactur = json[0].products
                    this.isLoadingC = false
                break;
                case "AMD":
                    this.productsCpuByManufactur = json[0].AMD
                    this.isLoadingC = false
                break;
                case "Intel":
                    this.productsCpuByManufactur = json[0].Intel
                    this.isLoadingC = false
                break;
            }   
        })
    }
}

const catalogCpuStore = new CatalogCpuStore()
export default catalogCpuStore