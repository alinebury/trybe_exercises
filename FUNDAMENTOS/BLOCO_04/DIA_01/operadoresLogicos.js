const currentHour = 21;
let message;
let weekDay = "domingo";

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else
if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour <= 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour <= 14) {
    message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour <= 11) {
    message = "Humm, cheiro de café recém passado";
}

console.log(message);
if (weekDay == "segunda-feira" || weekDay == "terça-feira" || weekDay == "quarta-feira" || weekDay == "quinta-feira" || weekDay == "sexta-feira") {
    console.log("Oba, mais um dia de aprenziadao na Trybe :D");
} else {
    console.log("Finalmente final de semana UwU");
}
console.log((2 + 2) == 4);
console.log(!(2 + 2) == 4); //NOT