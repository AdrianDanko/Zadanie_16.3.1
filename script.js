function report() {
    // dnešny datum
    let today = new Date();
    console.log(today);

    // deň narodenín
    const bday = new Date(document.getElementById("birthday").value);
    console.log("Dátum narodenia: " + bday);

    let age = today.getFullYear() - bday.getFullYear();
    console.log(age);


    let dalšie_narodeniny = new Date(today.getFullYear(), bday.getMonth(), bday.getDate());

    if (today > dalšie_narodeniny) {
        dalšie_narodeniny.setFullYear(today.getFullYear() + 1);
    }
    var one_day = 24 * 60 * 60 * 1000;

    let daysLeft = Math.ceil((dalšie_narodeniny.getTime() - today.getTime()) / (one_day));

    console.log("narodeniny budu za: " + daysLeft + " dni")

    let vypisDiv = document.getElementById("vypis");
    vypisDiv.innerHTML += "<p>" + "O " + daysLeft + " dní budeš mať narodeniny" + "</p>"


    // určenie ročného obdobia
    let mesiac_narodenia = bday.getMonth()
    console.log("Mesiac narodenia: " + mesiac_narodenia);
    if (mesiac_narodenia == 2 || mesiac_narodenia == 3 || mesiac_narodenia == 4) {
        console.log("Narodil si sa na jar");
        vypisDiv.innerHTML += "<p>" + "Narodil si sa na jar." + "</p>"
    }
    if (mesiac_narodenia == 5 || mesiac_narodenia == 6 || mesiac_narodenia == 7) {
        console.log("Narodil si sa v lete");
        vypisDiv.innerHTML += "<p>" + "Narodil si sa v lete." + "</p>"
    }
    if (mesiac_narodenia == 8 || mesiac_narodenia == 9 || mesiac_narodenia == 10) {
        console.log("Narodil si sa na jeseň");
        vypisDiv.innerHTML += "<p>" + "Narodil si sa na jeseň." + "</p>"
    }
    if (mesiac_narodenia == 11 || mesiac_narodenia == 0 || mesiac_narodenia == 1) {
        console.log("Narodil si sa v zime");
        vypisDiv.innerHTML += "<p>" + "Narodil si sa v zime." + "</p>"
    }
}

