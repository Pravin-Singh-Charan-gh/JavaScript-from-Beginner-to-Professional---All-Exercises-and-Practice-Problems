let people = {
    friends :[],
}
let friend1={
    firstName : "Ramesh",
    lastName : "Tagore",
    id : 101
};
let friend2={
    firstName : "Sohan",
    lastName : "Mahela",
    id : 102
};
let friend3={
    firstName : "John",
    lastName : "Damor",
    id : 103
};

people.friends.push(friend1,friend2,friend3);

console.log(people.friends);

//  1. Create an object named people that contains an empty array that is called 
// friends.
//  2. Create three variables, each containing an object, that contain one of your 
// friend's first names, last names, and an ID value.
//  3. Add the three friends to the friend array.
//  4. Output it to the console.
