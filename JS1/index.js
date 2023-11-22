/*const array = ['Задача 1', 'Задача 2', 'Задача 3']
const array2 = []

for (let index = 0; index < array.length; index++) {
    if (array[index] === 'Задача 2') {
        console.log ('Пропущен')
        continue
    }
    console.log(array[index])
}

console.log('---------------------------------------------------------------')

for (let index = 0; index < array.length; index++) {
    if (array[index] === 'Задача 2') {
        console.log ('Пропущен')
        break
    }
    console.log(array[index])
}

console.log('---------------------------------------------------------------')

for (let index = 0; index < array.length; index++) {
    if (array[index] === 'Задача 2') {
        continue
    }
    console.log(array[index])
}

for (let index = array.length - 1; index >= 0; index--) {
    array2.push(array[index])
}

console.log(array2)

for (i = 1; i < 5; i++) {
    console.log(`Цикл 1 - ${i}`)
    for (j = 1; j < 5; j++) {
        console.log(`Цикл 2 - ${j}`)
    }
}*/

const array = [1, 2, 6, 8, -3, 2, -10, -5]
const found = []

for (let index = 0; index < array.length; index++) {
    if (array[index] < 0) {
        found.push(array[index])
    }
}

console.log(found)