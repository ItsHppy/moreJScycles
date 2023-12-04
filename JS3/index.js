/*//метод sort
const num = [3, 1, 25, -1]

const num1 = num.sort((a, b) => {a - b}).map((el) => el * 10)
const num2 = num1.sort((a, b) => {b - a}).map((el) => el * 10)
console.log('num', num)
console.log('num1', num1)
console.log('num2', num2)

//.sort() + ...spread
const num3 = [...num].sort((a, b) => { a - b }).map((el) => el * 10)
const num4 = num1.sort((a, b) => { a - b }).map((el) => el * 10)

//.sort() без аргумента
const user = ['Вася', 'Катя', 'Аня', 'Петя']
console.log(user)
console.log(user.sort())
console.log(num)
console.log(num.sort())

//Объекты
const userName = ['Вася', 'Пушкин', 21]*/
const userName2 = {
    name: 'Вася', 
    surName: 'Пупкин',
    age: 21,
    skill: ['Программирование', 'Готовка'],
    eduBasic: 'Школа 10',
    eduPro: 'БГУ'
}

//Обращение к объектам
console.log(userName2)
console.log(userName2.name)
console.log(userName2.skill[1])
console.log(userName2['edu' + a])

//Задать свойство

userName2['city'] = 'Минск'
userName2.age = 30  