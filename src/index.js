import * as cartService from './services/cart.js';
import createItem from "./services/item.js";

const myCart = [];
const myWishList = [];

console.log("Welcome to your shopee cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

//await cartService.deleteItem(myCart, item2.name);


console.log("Shopee cart total: ")
await cartService.calculateTotal(myCart);