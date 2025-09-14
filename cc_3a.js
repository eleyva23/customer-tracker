// Coding Challange 3a
 // Create Dataset
 let customers = [
    {name: "Jannet", email: "jannetlouis.com" , purchases: "pens , staples  ,paperclips"}, 
    {name: "David" , email: "davidledere.com", purchases: "tape , paper , paperweights"}, 
    {name: "Emma" , email: "emmaleyva.com" , purchases: "scissors , pencils , expomarkers"},

 ];

 // Summary Of Products 
 console.log(customers.forEach(obj => console.log(`${obj.name}\t|\t${obj.email}\t|\t${obj.purchases}`)))

// Adding and Removing Customers 
customers.push({name:"sophia", email: "sophialeyva.com" , purchases: "sticky notes, erasers, thumbtacks"})
 customers.pull({name:"sophia", email: "sophialeyva.com" , purchases: "sticky notes, erasers, thumbtacks"})
