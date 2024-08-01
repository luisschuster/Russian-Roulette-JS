document.getElementById("button").addEventListener("click", gun)

function gun() {
    let bullets = parseFloat(document.getElementById("operations").value);
    let random = randomNum();
    console.log(bullets);
    console.log(random);
    if (bullets >= random) {
        console.log("ded")
        alert("U ded.")
    }
    else {
        console.log("live")
        alert("U live.")
    }
}

function randomNum() {
    return Math.floor(Math.random() * 6) + 1;
}