const cost = 1;
const value = 3;

if (cost < 0 || value < 0) {
    console.log("Erro! Valor inválido!");
} else {
    const total = cost * 1.2; //imposto
    const lucro = (value - total) * 1000;
    console.log("Lucro de mil vendas:", lucro);
}