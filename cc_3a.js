// Coding Challange 3a
// Create Dataset
let customers = [
    {name: "Jannet", email: "jannetlouis@gmail.com" , purchases: "pens , staples  ,paperclips"}, 
    {name: "David" , email: "davidledere@gmail.com", purchases: "tape , paper , paperweights"}, 
    {name: "Emma" , email: "emmaleyva@gmail.com" , purchases: "scissors , pencils , expomarkers"},
];

// Summary Of Products 
customers.forEach(obj => {
    console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`);
});

// Adding and Removing Customers 
customers.push({name:"Sophia", email: "sophialeyva.com", purchases: "sticky notes, erasers, thumbtacks"});
customers.shift(); // Removes the first customer (Jannet)


customers.forEach(item => {
  if (item.name === "David") {
    item.email = "davidlederer"; // Directly modify the email (notice that the last letter of the email is now "r")
  }
});

console.log(customers);