// Create an Inventory Array of Product Objects:
// Defining product details.

const inventory = [

    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
    
    ];

// Create a Function to Display Product Details:

function displayProductDetails(product) {
console.log(`Product Name: ${product.name}, Product Price: $${product.price}, Product Quantity: ${product.quantity}'); `)
}

// Using if Statements to check the stock status:

if (product.quantity <= product.lowStockLevel) {
    console.log("Stock Status: Low Stock")
} else {
   console.log("Stock Status:In Stock");
}