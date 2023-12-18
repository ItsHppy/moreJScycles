function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*function test() {
    const hello2 = document.querySelector('')
    console.log(hello2)
    console.log('test');
}
document.querySelector("body > h1")

document.addEventListener('DOMContentLoaded', (event) => {
    test();
});*/

function createClassroom(monitorCount) {
    let lastMonitorId = 1;

    const body = document.querySelector('body');

    const table = document.createElement("div");

    table.classList.add('table');

    for (let index = 1; index < monitorCount; index++) {

        const monitor = document.createElement("div")

        const monitorClass = 'monitor-' + getRandomInt(2);

        const monitorId = 'monitor-' + lastMonitorId;

        lastMonitorId++;

        monitor.classList.add(monitorClass);

        monitor.id = monitorId;

        table.appendChild(monitor)
    }

    body.appendChild(table);
}

document.addEventListener('DOMContentLoaded', (event) => {
    createClassroom(10);
});