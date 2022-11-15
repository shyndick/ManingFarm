import { makeAutoObservable } from "mobx";

class CartStore {

    cart = JSON.parse(localStorage.getItem('cart')) || []

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }

    get CartCount () {
        let allCount = 0
        this.cart.forEach(({count}) => {
            allCount += count;
        })
        return  allCount
    }

    get CartPrices () {
        let allPrices = 0
        this.cart.forEach(({count, prices}) => {

            allPrices = allPrices + (count*prices.price_min.amount)
        })
        return  allPrices
    }

    addToCart (product) {
        const indexProductInCart = this.cart.findIndex(({id}) => id === product.id)
        if(indexProductInCart !== -1 ){
            this.cart[indexProductInCart].count +=1
        } else {
            product.count = 1
            this.cart.push(product)
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
        console.log(this.cart)
    }
}

const cartStore = new CartStore()
export default cartStore
