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
        price: 599.99,
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


let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
    const { amount, price } = cartItem;
    //count
    total.totalItems += amount;
    // count sum
    total.cartTotal += amount * price;
    return total
},
    {
        totalItems: 0,
        cartTotal: 0
    })

cartTotal = parseFloat(cartTotal.toFixed(2))
console.log(totalItems, cartTotal);

// github repos example

const url = "https://api.github.com/users/kadirermaya/repos?per_page=100";

const fetchRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo) => {
        const { language } = repo;
        if (language) {
            total[language] = total[language] + 1 || 1
        }

        // if (language) {

        //     if (total[language]) {
        //         total[language] = total[language] + 1
        //     }

        //     else {
        //         total[language] = 1
        //     }
        // }


        return total
    }, {})
    console.log(newData)
}


fetchRepos();