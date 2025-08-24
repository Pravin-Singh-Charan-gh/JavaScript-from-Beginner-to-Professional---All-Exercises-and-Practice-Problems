let items = [];
let item1 = {name : "Biscuit", model : "Parle-G", cost : 10, quantity : 2000};
let item2 = {name : "Sugar", model : "Madhur", cost : 45, quantity : 500};
let item3 = {name : "Rice", model : "Taj", cost : 50, quantity : 680};

items.push(item1,item2,item3);
console.log(items);

console.log(items[2].quantity);

//  In this project, you will implement a data structure for a product catalog and create 
// queries to retrieve data.
//  1. Create an array to hold an inventory of store items.
//  2. Create three items, each having the properties of name, model, cost, and 
// quantity.
//  3. Add all three objects to the main array using an array method, and then log 
// the inventory array to the console.
//  4. Access the quantity element of your third item, and log it to the console. 
// Experiment by adding and accessing more elements within your data 
// structure.