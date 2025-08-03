
async function addItem(userCart, item){
    userCart.push(item);
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((
        p
    ) => p.name === item.name);

    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return;
    }

    // const deleteIndex = index -1;

    // if(index >= 0 && index < userCart.length){
    //     userCart.splice(deleteIndex, 1);
    // }
}

async function calculateTotal(userCart){
    const result = userCart.reduce((
        total, item
    ) => total + item.subtotal(),
     0);

    console.log(result);
}

async function displayCart(userCart){
    console.log("Shopee Cart List: \n");
    userCart.forEach((
        item, index
    )=>{
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | SubTotal ${item.subtotal()}`);
    });
}

export {
    calculateTotal,
    removeItem,
    deleteItem,
    addItem,
    displayCart
}