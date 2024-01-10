function main() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
          console.log(json);
          const DOMelement = document.querySelector("#object");
          
          for (const iterator of json) {
            const newElement = document.createElement("p");
            newElement.textContent = "userId: " + iterator.userId + ", id: " + iterator.id + ", title: " + iterator.title;
            DOMelement.append(newElement)
          }
          
      })
}
/*function main2() {
    fetch('https://jsonplaceholder.typicode.com/comments/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function main3() {
    fetch('https://jsonplaceholder.typicode.com/albums/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function main4() {
    fetch('https://jsonplaceholder.typicode.com/photos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function main5() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

function main6() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => console.log(json))
}*/

document.addEventListener('DOMContentLoaded', main)
/*document.addEventListener('DOMContentLoaded', main2)
document.addEventListener('DOMContentLoaded', main3)
document.addEventListener('DOMContentLoaded', main4)
document.addEventListener('DOMContentLoaded', main5)
document.addEventListener('DOMContentLoaded', main6)*/

/*console.log(xhr.response)
const test = JSON.parse(xhr.response)
console.log(test)
const jsonObj = JSON.stringify(test)
console.log(jsonObj)*/


/*function main() {
// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function() {
  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else { // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }

}*/