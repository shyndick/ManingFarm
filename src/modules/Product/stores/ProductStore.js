import { makeAutoObservable } from "mobx";

class ProductStore {
    constructor() {
        makeAutoObservable(this)

        loadProduct = async (productId) => {
            const response = await fetch('http://localhost:3000/videocard')
        }
    }
}