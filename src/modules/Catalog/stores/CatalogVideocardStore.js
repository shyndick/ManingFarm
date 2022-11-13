import {makeAutoObservable, runInAction} from "mobx"

class CatalogVideocardStore {

    manufacturer = undefined
    manufacturerIndex = 0
    productsByManufactur = undefined

    isLoading = false

    constructor () {
        makeAutoObservable(this)
    }

    setManufactur = (index) => {
        this.manufacturerIndex = index
    }

    loadManufacturer = async() => {
        try {
        const response = await fetch('http://localhost:3000/videocard')
        if(response.status >= 400) {
            throw new Error(`response Error ${response.status} - ${response.statusText}` )
        }
        const json = await response.json()
            runInAction(() => {
                this.manufacturer = json[0].manufacturer
            })
        } catch (e){
            console.log(e)
        }
    }

    loadManufactur = async(manufactur) => {
        this.isLoading = true
        try {
        const response = await fetch('http://localhost:3000/videocard')
        if(response.status >= 400) {
            throw new Error(`response Error ${response.status} - ${response.statusText}` )
        }
        const json = await response.json()
        runInAction(() => {
            switch(manufactur) {
                case "products":
                    this.productsByManufactur = json[0].products
                    this.isLoading = false
                break;
                case "Gigabyte":
                    this.productsByManufactur = json[0].Gigabyte
                    this.isLoading = false
                break;
                case "Palit":
                    this.productsByManufactur = json[0].Palit
                    this.isLoading = false
                break;
                case "MSI":
                    this.productsByManufactur = json[0].MSI
                    this.isLoading = false
                break
                case "ASROCK":
                    this.productsByCategory = json[0].ASROCK
                    this.isLoading = false
                break;
                case "ASUS":
                    this.productsByManufactur = json[0].ASUS
                    this.isLoading = false
                break;
                case "PNY":
                    this.productsByManufactur = json[0].PNY
                    this.isLoading = false
                break
                case "Dell":
                    this.productsByManufactur = json[0].Dell
                    this.isLoading = false
                break
                case "AMD":
                    this.productsByManufactur = json[0].AMD
                    this.isLoading = false
                break;
                case "NVIDIA":
                    this.productsByManufactur = json[0].NVIDIA
                    this.isLoading = false
                break;
            }   
        })
    } catch (e) {
        console.log(e)
    }
    }
}

const catalogVideocardStore = new CatalogVideocardStore()
export default catalogVideocardStore