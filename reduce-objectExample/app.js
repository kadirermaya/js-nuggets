//reduce - objects

// cart example 

const cart = [
    {
        title: 'Apple Iphone X',
        price: 899,
        amount: 5
    },
    {
        title: 'Xiaomi Y',
        price: 599,
        amount: 4
    },
    {
        title: 'Samsung Model X',
        price: 799,
        amount: 3
    },
    {
        title: 'Motorola',
        price: 699,
        amount: 2
    }

];


let total = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem;
    //count
    total.totalItems += amount;
    return total
},
    {
        totalItems: 0,
        cartTotal: 0
    })

console.log(total);

// github repos example

const url = "";