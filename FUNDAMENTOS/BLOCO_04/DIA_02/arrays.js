let menu = ["Home", "Serviços", "Portfólio", "Links"];

let menuServices = menu[1];
console.log(menuServices);

let indexOfPortfólio = menu.indexOf("Portfólio"); //índice do item
console.log(indexOfPortfólio);

menu.push("Contato"); //Adiciona mais um item
console.log(menu);

menu.pop(); //remove o último item
console.log(menu);