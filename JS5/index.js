/*const array = [1, 2, 3, 4, 5]
console.log(array)

for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (array[index] != 3) {
        console.log(element);
    }
}

array.forEach(function(element, index, pArr) {
    console.log(element);
    console.log(index);
    console.log(pArr);
    console.log(array)
    console.log("=====")
})

array.forEach((element, index) => {
    console.log(element);
    console.log(index);
    console.log("=====")
})

//const filteredArray = array.filter(element => element != 3);
//console.log(filteredArray)

let sum = 0;
for (const element of array) {
    sum += element;
}

console.log(sum)

const sumArray = array.reduce((total, element) => {
    return total + element.prop2;
}, 0);

console.log(sumArray)*/
const array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
console.log(array)
for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (array[index] != 8) {
        console.log(element);
    }
}
console.log(' ')
let sum = 0;
for (const element of array) {
    sum += element;
}
console.log(' ')
array.forEach(function(element, index, pArr) {
    console.log(element);
    console.log(index);
    console.log(pArr);
    console.log("=====")
})
console.log(' ')
const mappedArray = array.map(element => element != 8);
console.log(mappedArray)
console.log(' ')
const filteredArray = array.filter(element => element != 8);
console.log(filteredArray)
console.log(' ')
const sumArray = array.reduce((total, element) => {
    return total + element;
}, 0)
console.log(sumArray)
console.log(' ')
const foundArray = array.find(element => element === 8);
console.log(foundArray)
console.log(' ')
const foundIndex = array.findIndex(index => index === 8);
console.log(foundIndex)