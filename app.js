let count = 0;
let countElement = document.getElementById('count');
let saveEl = document.getElementById('save-el');


function increment() {
    count += 1; // += umjesto pisanja count = count + 1 - skracuje se nepotreban kod
    countElement.textContent = count;
};

function save() {
    let storedNumber = count + " - ";
    saveEl.textContent += storedNumber; // dodavanjem += se prijasnji unosi ne brisu jer se na taj element uz postojeci unos dodaje novi - kao da pisemo cijelo vrijeme saveEl.innerTexr + storedNumber
    count = 0;
    countElement.textContent = count;
};