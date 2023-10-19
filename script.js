window.addEventListener("load", (event) => {
    gerarFato();
});

async function loadFile(fileName) {
    const file = await fetch(fileName);
    const text = await file.text();
    return text.trim().split('\n');
}
async function randomFact() {
    const file = await loadFile('facts.txt');
    const randomFact = file[Math.floor(Math.random() * file.length)];
    document.getElementById('FATO').textContent = randomFact;
    toogle("load");toogle("FATO");
}


function gerarFato(){
    toogle("load");toogle("FATO");
    setTimeout(randomFact,300);
}


function toogle(ID) {
    const element = document.getElementById(ID);
    element.style.display = element.style.display === "none" ? "block" : "none";
}

function copy(){
    const element = document.getElementById('FATO');
    const storage = document.createElement('textarea');
    storage.value = element.innerText
    element.appendChild(storage);
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);  
}

