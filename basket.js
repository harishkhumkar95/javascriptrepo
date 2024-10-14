function calculateTotal(basket,price){
    const basket = {
        apple: parseInt(document.getElementById('apple').value),
        mango: parseInt(document.getElementById('mango').value),
        banana: parseInt(document.getElementById('banana').value)
    }

const price ={
    "apple" : 0.45,
    "mango" : 0.80,
    "bannana" : 0.35
}
    let totalCost = 0
    for(let product in basket)
    {
         totalCost = totalCost + (basket[product]*price[product])
    }
    return parseFloat(totalCost.toFixed(2));
}


  result = calculateTotal(basket,price)

alert(result)