const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const numLeft = dodger.style.left.replace("px", "");
const left = parseInt(numLeft, 10);

if (left > 0){
    dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e){
    if (e.key === "Arrowleft"){
        moveDodgerLeft();
    }
}
);

function moveDodgerRight(){
    const numLeft= dodger.style.left.replace("px", "");
    const left = parseInt(numLeft, 10);

    if (left < 200){
    dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e){
    if (e.key === "Arrowleft"){
        moveDodgerLeft();
    }
}
);