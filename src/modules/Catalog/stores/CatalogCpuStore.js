import {makeAutoObservable, runInAction} from "mobx"
import {notification } from 'antd';

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
        try {
        const response = await fetch('http://localhost:3000/cpu')
        if(response.status >= 400){
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }
        const json = await response.json()
            runInAction(() => {
                this.manufacturerCpu = json[0].manufacturer
            })
        } catch(e) {
            console.log(e)
        }
    }

    loadCpuManufactur = async(manufactur) => {
        try{
        this.isLoadingC = true
        const response = await fetch('http://localhost:3000/cpu')
        if(response.status >= 400) {
            notification.error({
                message: response.status,
                description: response.statusText
            })
            throw new Error (response)
        }
        const json = await response.json()
        runInAction(() => {
            switch(manufactur) {
                case "Все товары":
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
        } catch (e) {
            console.log(e)
        }
    }
}

const catalogCpuStore = new CatalogCpuStore()
export default catalogCpuStore