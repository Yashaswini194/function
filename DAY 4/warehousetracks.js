// Function to check inventory levels
function checkInventory(productName, quantity) {
  if (quantity < 10) {
    console.log(`Product: ${productName} - Restock Immediately!`);
  } else if (quantity >= 10 && quantity <= 20) {
    console.log(`Product: ${productName} - Stock is Low.`);
  } else {
    console.log(`Product: ${productName} - Inventory is Adequate.`);
  }
}

// Example usage:
checkInventory("computers", 5);  // Restock Immediately
checkInventory("macbook", 15); // Stock is Low
checkInventory("television", 25); // Inventory is Adequate
