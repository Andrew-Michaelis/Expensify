// const person = {
//     name: "Andrew",
//     age: 25,
//     location: {
//         city: "Stansbury",
//         temp: 69
//     }
// };

// const {name: firstName = "Anon", age} = person //same as below
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: "Enders Game",
//     author: "Orson Scott Card",
//     publisher: {
//         // name: "Tor Books"
//     }
// };
// const {name: publisherName = "Self Published"} = book.publisher;
// console.log(publisherName);

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"]
const [ , city, state] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [menuItem, small, medium, large] = item;
console.log(`A medium ${menuItem} costs ${medium}`);