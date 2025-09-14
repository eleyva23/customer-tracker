// Coding Challange 3a
// Create Dataset
let customers = [
    {name: "Jannet", email: "jannetlouis@gmail.com" , purchases: "pens , staples  ,paperclips"}, 
    {name: "David" , email: "davidledere@gmail.com", purchases: "tape , paper , paperweights"}, 
    {name: "Emma" , email: "emmaleyva@gmail.com" , purchases: "scissors , pencils , expomarkers"},
];

// Adding and Removing Data
customers.push({name:"Sophia", email: "sophialeyva.com", purchases: "sticky notes, erasers, thumbtacks"});
customers.shift(); // Removes the first customer (Jannet)

// Update Customer Information
customers.forEach(item => {
  if (item.name === "David") {
    item.email = "davidlederer@gmail.com"; // Directly modify the email (notice that the last letter of the email is now "r")
  }
});

customers[0].purchases = "tape, paper, paperweights, glue";

console.log(customers);

//Displaying Customer Information
customers.forEach(obj => {
    console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`);
});