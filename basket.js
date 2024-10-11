function calculateTotal(basket,price){
    let totalCost = 0
    for(let product in basket)
    {
        if(price.hasOwnProperty(product))
            totalCost = totalCost + (basket[product]*price[product])
    }
    return parseFloat(totalCost.toFixed(2));
}

const basket ={
    "apple" : 5,
    "mango" : 6,
    "bannana" : 7
}


const price ={
    "apple" : 0.45,
    "mango" : 0.80,
    "bannana" : 0.35
}

result = calculateTotal(basket,price)

alert(result)