import {makeAutoObservable, runInAction} from "mobx"

class CatalogVideocardStore {

    // products = undefined

    // categories = undefined
    // categoryIndex = 0
    // productsByCategory = undefined

    manufacturer = undefined
    manufacturerIndex = 0
    productsByManufactur = undefined

    isLoading = false

    constructor () {
        makeAutoObservable(this)
    }

    // setCategory = (index) => {
    //     this.categoryIndex = index
    // }



    // loadProducts = async() => {
    //     const response = await fetch('http://localhost:3000/videocard')
    //     const json = await response.json()
    //         runInAction(() => {
    //             this.products = json[0].products
    //             this.isLoading = false
    //         })
    // }

    // loadCategories = async() => {
    //     const response = await fetch('http://localhost:3000/videocard')
    //     const json = await response.json()
    //         runInAction(() => {
    //             this.categories = json[0].category
    //         })
    // }

    // loadCategory = async(categor) => {
    //     this.isLoading = true
    //     const response = await fetch(`http://localhost:3000/videocard`)
    //     const json = await response.json()
    //         runInAction(() => {
    //             switch(categor) {
    //                 case "k4":
    //                     this.productsByCategory = json[0].k4
    //                     this.isLoading = false
    //                 break;
    //                 case "k2":
    //                     this.productsByCategory = json[0].k2
    //                     this.isLoading = false
    //                 break;
    //                 case "professional":
    //                     this.productsByCategory = json[0].professional
    //                     this.isLoading = false
    //                 break
    //             }
                
                
                
    //         })
    // }

    setManufactur = (index) => {
        this.manufacturerIndex = index
    }

    loadManufacturer = async() => {
        const response = await fetch('http://localhost:3000/videocard')
        const json = await response.json()
            runInAction(() => {
                this.manufacturer = json[0].manufacturer
            })
    }

    loadManufactur = async(manufactur) => {
        this.isLoading = true
        const response = await fetch('http://localhost:3000/videocard')
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
    }
}

const catalogVideocardStore = new CatalogVideocardStore()
export default catalogVideocardStore