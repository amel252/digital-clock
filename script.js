const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

// function pour récuperer heure de notre ordi
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    } else {
        ampm = "AM";
    }
    // pour avoir le chiffre de l'heure : 03 exemple
    h = h < 10 ? "0" + h : h; // on ajoute un "0" devant (ex. 7 devient "07")
    //Sinon : h → on laisse la valeur telle quelle

    // attribuer heure de mon ordi au constantes
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    // pour que l'heure s'actualise on doit faire
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();
