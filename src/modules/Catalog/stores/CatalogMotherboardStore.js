
import {makeAutoObservable, runInAction} from "mobx"

class CatalogMotherboardStore {


    manufacturerMotherboard = undefined
    manufacturerMotherboardIndex = 0
    productsMotherboardByManufactur = undefined

    isLoadingM = false

    constructor () {
        makeAutoObservable(this)
    }

    setMotherboardManufactur = (index) => {
        this.manufacturerMotherboardIndex = index
    }
    

    loadMotherboardManufacturer = async() => {
        const response = await fetch('http://localhost:3000/motherboard')
        const json = await response.json()
            runInAction(() => {
                this.manufacturerMotherboard = json[0].manufacturer
            })
    }

    loadMotherboardManufactur = async(manufactur) => {
        this.isLoadingM = true
        const response = await fetch('http://localhost:3000/motherboard')
        const json = await response.json()
        runInAction(() => {
            switch(manufactur) {
                case "Все товары":
                    this.productsMotherboardByManufactur = json[0].products
                    this.isLoadingM = false
                break;
                case "Gigabyte":
                    this.productsMotherboardByManufactur = json[0].Gigabyte
                    this.isLoadingM = false
                break;
                case "ASUS":
                    this.productsMotherboardByManufactur = json[0].ASUS
                    this.isLoadingM = false
                break;
                case "MSI":
                    this.productsMotherboardByManufactur = json[0].MSI
                    this.isLoadingM = false
                break;
                case "ASRock":
                    this.productsMotherboardByManufactur = json[0].ASRock
                    this.isLoadingM = false
                break;
            }   
        })
    }
}

const catalogMotherboardStore = new CatalogMotherboardStore()
export default catalogMotherboardStore