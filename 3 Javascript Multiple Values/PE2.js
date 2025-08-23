let list = [];
list.push("Milk","Bread","Apples");
list.splice(1,1,"Bananas","Eggs"); 
console.log(list.pop());
list.sort();

let indexOfMilk = list.indexOf("Milk");
console.log(indexOfMilk);


list.splice(1,0,"Carrots","Lettuce");

let list2 = ["Juice","Pop"];

list = list.concat(list2).concat(list2);

let lastIndexOfPop = list.lastIndexOf("Pop");
console.log(lastIndexOfPop);

console.log(list);




//  1. Create an empty array to use as a shopping list.
//  2. Add Milk, Bread, and Apples to your list.
//  3. Update "Bread" with Bananas and Eggs.
//  4. Remove the last item from the array and output it into the console.
//  5. Sort the list alphabetically.
//  6. Find and output the index value of Milk.
//  7. After Bananas, add Carrots and Lettuce.
//  8. Create a new list containing Juice and Pop.
//  9. Combine both lists, adding the new list twice to the end of the first list.
//  10. Get the last index value of Pop and output it to the console.
//  11. Your final list should look like this:
//  ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
// "Pop", "Juice", "Pop"]


// const myList = [];
//  myList.push("Milk", "Bread", "Apples");
//  myList.splice(1, 1, "Bananas", "Eggs");
//  const removeLast = myList.pop();
//  console.log(removeLast);
//  myList.sort();
//  console.log(myList.indexOf("Milk"));
//  myList.splice(1, 0, "Carrots", "Lettuce");
//  const myList2 = ["Juice", "Pop"];
//  const finalList = myList.concat(myList2, myList2);
//  console.log(finalList.lastIndexOf("Pop"));
//  console.log(finalList);