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


// Using if Statements to check the stock status:

if (product.quantity <= product.lowStockLevel) {
    return ("Stock Status: Low Stock");
} else {
   return ("Stock Status:In Stock");
}
}

 //Testing an example to look for data in the first row (0) of inventory
 
 console.log(displayProductDetails(inventory[0]));
 
 // oiutput Product Name: Laptop, Product Price: $1200, Product Quantity: 10); 
 //Stock Status:In Stock

// Task 3: Create a Function to Update Product Stock After Sales:

function updateStock (product,unitsSold) {
 product.quantity -= unitsSold;
    
 if(product.quantity<= 0) {

return`${product.name} out of stock`;

 } else if (product.quantity <= product.lowStockLevel) {
 
return`${product.name} low in stock`
 }
} 


//Updatedstock- Substracting unit sold from current product quantity
// then created if statement if equal or zero than out of stock.
// else if less than product quantity low in stock.

//Testing with an example we sell 9 units of laptop and 4 units of smartpohone.

console.log(updateStock(inventory[0],9)); // output Laptop low in stock
console.log(updateStock(inventory[1],4));// output Smartphone out of stock


// Task 4 Create a Function to Check Low Stock Products:

 function checkLowStock (inventory) {
inventory.forEach( (product) => {
    if(product.quantity<= product.lowSTockLevel) {
return (`${product.name} low in stock`);
}
 });
}
// created a checkLowStock funstion for inventory of each product.
// if the product quantity has low stock level console.log will give result low in stock.

// logged the function for low stock level 
console.log(checkLowStock (inventory)); 

//Create a function to calculate total inventory value:
function calculateInventoryValue (total,Inventory) {

}

// Task 5 Create a Function to Calculate Total Inventory Value
function calculateInventoryValue (inventory) {
    return inventory.reduce((total,product)=>{
        return total + (product.quantity*product.price);
    },0)

}
//testing the function
console.log(`The total value of is $${calculateInventoryValue(inventory)}.`) //outputs message with $22550 as the value

// 