function calculateTotal(basket, price) {
    let totalCost = 0;
    for (let product in basket) {
        totalCost += basket[product] * price[product];
    }
    return parseFloat(totalCost.toFixed(2));
}

document.getElementById('fruitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const basket = {
        apple: parseInt(document.getElementById('apple').value),
        mango: parseInt(document.getElementById('mango').value),
        banana: parseInt(document.getElementById('banana').value)
    };

    const price = {
        apple: 0.45,
        mango: 0.80,
        banana: 0.35
    };

    const result = calculateTotal(basket, price);
    alert(result);
});
