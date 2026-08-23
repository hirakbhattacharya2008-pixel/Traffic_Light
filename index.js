let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");

let redBtn = document.querySelector("#redBtn");
let yellowBtn = document.querySelector("#yellowBtn");
let greenBtn = document.querySelector("#greenBtn");

function resetLights(){
    red.style.backgroundColor ="gray";
    yellow.style.backgroundColor ="gray";
    green.style.backgroundColor ="gray";

    red.style.boxShadow ="none";
    yellow.style.boxShadow ="none";
    green.style.boxShadow ="none";
}

redBtn.addEventListener("click", function (){
    resetLights();
    red.style.backgroundColor ="red"
    red.style.boxshadow ="0 0 20px red";
});

yellowBtn.addEventListener("click", function (){
    resetLights();
    yellow.style.backgroundColor ="yellow"
    yellow.style.boxshadow ="0 0 20px yellow";
});

greenBtn.addEventListener("click", function (){
     resetLights();
     green.style.backgroundColor ="green"
     green.style.boxshadow ="0 0 20px green";

});