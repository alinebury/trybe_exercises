const header = document.querySelector("#header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const emergency = document.querySelector(".emergency-tasks");
emergency.style.backgroundColor = "rgb(212, 111, 199)";

const purpleTitles = document.querySelectorAll(".emergency-tasks h3");
for(let i=0 ; i<purpleTitles.length ; i++){
    purpleTitles[i].style.backgroundColor = "purple";
}

const noEmergency = document.querySelector(".no-emergency-tasks");
noEmergency.style.backgroundColor = "yellow";

const blackTitles = document.querySelectorAll(".no-emergency-tasks h3");
for(let i=0 ; i<blackTitles.length ; i++){
    blackTitles[i].style.backgroundColor = "black";
}

const final = document.querySelector("#footer-container");
final.style.backgroundColor = "green";