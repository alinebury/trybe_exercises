const piece = "TORRE";

switch (piece.toLowerCase()) {
    case "rei":
        console.log("Uma cara para qualquer lado");
        break;
    case "rainha":
        console.log("Vertical, horizontal e diagonal");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("Anda em L");
        break;
    case "torre":
        console.log("Horizontal e vertical");
        break;
    case "peão":
        console.log("Uma casa para frente, primeiro movimento duas casas");
        break;
    default:
        console.log("Inválido");
        break;
}