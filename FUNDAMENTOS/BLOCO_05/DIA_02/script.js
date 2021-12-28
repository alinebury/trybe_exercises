console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

/* ----------------------------- PARTE 1 ----------------------------- */
const elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

const pai = elementoOndeVoceEsta.parentElement; //retorna para elemento pai
pai.style.color = "red";

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild; // acesso primeiro filho do elemento
primeiroFilhoDoFilho.innerText = "primeiro filho do filho";

const primeiroFilho = pai.firstElementChild; // acesso primeiro filho do elemento

const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling; //retorna para anterior

const atencao = elementoOndeVoceEsta.nextSibling; //acessa próximo irmão

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling.nextElementSibling; // acesso próximo elemento

const terceiroFilho2 = pai.lastElementChild.previousElementSibling; // pega último elemento e depois o anterior

/* ----------------------------- PARTE 2 ----------------------------- */

const pai2 = document.getElementById("pai");
const irmao = document.createElement("section");
irmao.id = "irmaoElementoOndeVoceEsta";
pai2.appendChild(irmaoElementoOndeVoceEsta);

const elementoOndeVoceEsta2 = document.getElementById("elementoOndeVoceEsta");
const filho = document.createElement("section");
filho.id = "filhoDoElementoOndeVoceEsta";
elementoOndeVoceEsta2.appendChild(filhoDoElementoOndeVoceEsta);

const primeiroFilhoDoFilho2 = document.getElementById("primeiroFilhoDoFilho");
const filhoDoFilho = document.createElement("section");
filhoDoFilho.id = "filhoDoPrimeiroFilhoDoFilho";
primeiroFilhoDoFilho2.appendChild(filhoDoPrimeiroFilhoDoFilho);

const acessTerceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

/* ----------------------------- PARTE 3 ----------------------------- */

const pai3 = document.getElementById("pai");
for(let i=pai3.childNodes.length-1 ; i>=0 ; i--){
    const currentChildren = pai3.childNodes[i];
    if(currentChildren.id !== "elementoOndeVoceEsta"){
        currentChildren.remove();
    }
}
const segundoFilhoDoFilho = document.getElementById("segundoEUltimoFilhoDoFilho");
segundoFilhoDoFilho.remove();