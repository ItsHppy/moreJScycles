//Цикл for..of
const score = [0, 6, 2, 10]

for (let element of score) {
    console.log('Раунд ' + element)
}
console.log(' ')
//Цикл for..of + .entries
for (const [index, element] of score.entries()) {
    console.log(`Раунд ${index + 1} - ${element}`)
}
console.log(' ')
//forEach
score.forEach((el, index) => {
    console.log(`Раунд ${index + 1} - ${el}`)
})