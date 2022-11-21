import { makeAutoObservable } from "mobx";

class CartStore {

    cart = JSON.parse(localStorage.getItem('cart')) || []

    constructor() {
        makeAutoObservable(this, undefined, {
            autoBind:true
        })
    }


    get cartCount () {
        let allCount = 0
        this.cart.forEach(({count}) => {
            allCount += count;
        })
        return  allCount
    }

    get cartPrices () {
        let allPrices = 0
        this.cart.forEach(({count, prices}) => {

            allPrices = allPrices + (count*prices.price_min.amount)
        })
        return  allPrices.toFixed(2)
    }

    addToCart (product, count) {
        const indexProductInCart = this.cart.findIndex(({id}) => id === product.id)
        if(!count){
            if(indexProductInCart !== -1 ){
                this.cart[indexProductInCart].count +=1
                console.log(count)
            } else {
                product.count = 1
                this.cart.push(product)
            }
        } else {
            if(indexProductInCart !== -1 ){
                this.cart[indexProductInCart].count += count
            } else {
                product.count = count
                this.cart.push(product)
            }
        }
       
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    deleteCartItem (cartItemId) {
        this.cart = this.cart.filter(({id}) => id !== cartItemId)
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    deleteAllCart () {
        localStorage.removeItem('cart')
        this.cart= []
    }
}

const cartStore = new CartStore()
export default cartStore
