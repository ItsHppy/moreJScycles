function getRandomInt(max) { 
    return Math.floor(Math.random() * max); 
} 

function turnOffPc(e) {
    const monitor = e.target.parentNode.querySelector('[type="monitor"]');
    monitor.classList.toggle("monitor__state--disabled");
}
 
function createClassroom() { 
 
    console.log("test2") 
    const pcCount = parseInt(document.querySelector("#pcInput").value); 
    const pcPerTable = parseInt(document.querySelector("#pcPerTableInput").value); 
 
    let lastPcId = 1; 
    let idN = 1;
 
    const classRoom = document.querySelector('#classRoom'); 
    classRoom.innerHTML = ''; 
 
    const tableCount = Math.ceil(pcCount / pcPerTable); 
 
    for (let index = 1; index <= tableCount; index++) { 
        if (lastPcId == pcCount + 1) { 
            return; 
        } 
 
        const tableWidth = 55 * pcPerTable; 
        const table = document.createElement("div"); 
        table.classList.add('table'); 
        table.style.width = tableWidth + 'px'; 
 
        for (let index = 0; index < pcPerTable; index++) { 
            if (lastPcId == pcCount + 1) { 
                break; 
            } 

            const pc = document.createElement("div"); 
            const pcClass = 'pc';
            const pcId = 'pc' + index;
            pc.classList.add(pcClass); 
            pc.id = pcId; 

            idN++;

            const monitor = document.createElement("div"); 
            const monitorClass = 'monitor-' + getRandomInt(2); 
            const monitorId = 'monitor-' + index;
            monitor.classList.add(monitorClass, 'monitor__state--disabled');
            monitor.id = monitorId;
            monitor.setAttribute('type', 'monitor')

            pc.appendChild(monitor);

            idN++;

            const keyboard = document.createElement("div"); 
            const keyboardClass = 'keyboard-' + getRandomInt(2); 
            const keyboardId = 'keyboard-' + index;
            keyboard.classList.add(keyboardClass);
            keyboard.id = keyboardId;

            document.addEventListener('click', turnOffPc);

            idN++;

            pc.appendChild(keyboard);

            lastPcId++; 
 
            table.appendChild(pc); 

        } 
 
        classRoom.appendChild(table); 
    } 
} 

document.addEventListener('DOMContentLoaded', (event) => { 
    const pcButton = document.querySelector("#pcShow"); 
    pcButton.addEventListener("click", createClassroom); 
});