function showText() {
    document.getElementById("age").innerHTML = "14";
    document.getElementById("school").innerHTML = "Гимназия №7 имени В.И.Ливенцева";
    document.getElementById("telnumber").innerHTML = "+375291360636";
}

function showJoke() {
    let randomjoke = document.querySelector("#object");
    fetch('https://v2.jokeapi.dev/joke/any')
      .then(response => response.json())
      .then(json => {
          console.log(json)
          randomjoke.textContent = json.joke || json.setup + " " + json.delivery
        })
}

document.addEventListener('DOMContentLoaded', (event) => { 
    const button1 = document.querySelector("#button1"); 
    button1.addEventListener("click", showText); 
});

document.addEventListener('DOMContentLoaded', (event) => { 
    const button2 = document.querySelector("#button2"); 
    button2.addEventListener("click", showJoke); 
});