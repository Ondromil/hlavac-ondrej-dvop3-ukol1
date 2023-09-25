// Array
const array = [
    "Lodash",
    "React",
    "Next",
    "Strapi",
    "Axios",
    "TypeScript",
]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
console.log("=========================");

const reversedArray = array.reverse();
for (let i = 0; i < reversedArray.length; i++) {
    console.log(reversedArray[i]);
}
console.log("=========================");

const sortedArray = array.sort();
for (let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i]);
}
console.log("=========================");

// Object
const car = {
    brand: "Fiat",
    model: "Multipla",
    year: "2001"
}
const {brand, model, year} = car;
console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}`)

// Generator
let randomNum = Math.floor(Math.random()*556)
console.log(randomNum);