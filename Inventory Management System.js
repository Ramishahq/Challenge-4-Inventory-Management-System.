// Task 1: Create an Inventory Array of Product Objects:
// Defining product details.

let inventory = [

    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    
    ];

// Task 2: Create a Function to Display Product Details:

function displayProductDetails(product) {
console.log(`Product Name: ${product.name}, Product Price: $${product.price}, Product Quantity: ${product.quantity}); `)
}

// Using if Statements to check the stock status:

if (product.quantity <= product.lowStockLevel) {
    console.log("Stock Status: Low Stock")
} else {
   console.log("Stock Status:In Stock");
}

// Task 3: Create a Function to Update Product Stock After Sales:

function updateStock (product,unitsSold) {
 product.quantity -= unitSold;
    if(product.quantity<= 0) {
    console.log(`${product.name} out of stock`);
} else if {
(product.quantity <= product.lowStockLevel)
 console.log(`${product.name} low in stock`)
} 
}

//Updatedstock- Substracting unit sold from current product quantity
// then created if statement if equal or zero than out of stock.
// else if less than product quantity low in stock.

// Task 4 Create a Function to Check Low Stock Products:

 function checkLowStock (inventory) {
inventory.forEach (products) => {
    if(product.quantity<= product.lowSTockLevels)
console.log(`${product.name} low in stock`);
}
 }
// created a checkLowStock funstion for inventory of each product.
// if the product quantity has low stock level console.log will give result low in stock.


