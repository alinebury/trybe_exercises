let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
info.recorrent = "Sim";

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain,Dell 's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrent: "Sim"
}
for (let key in info) {
    console.log(info[key] + " e " + info2[key]);
}