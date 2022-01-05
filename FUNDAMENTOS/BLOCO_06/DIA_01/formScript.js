const states = ["Acre (AC)","Alagoas (AL)","Amapá (AP)","Amazonas (AM)","Bahia (BA)","Ceará (CE)","Distrito Federal (DF)","Espírito Santo (ES)","Goiás (GO)","Maranhão (MA)","Mato Grosso (MT)","Mato Grosso do Sul (MS)","Minas Gerais (MG)","Pará (PA)","Paraíba (PB)","Paraná (PR)","Pernambuco (PE)","Piauí (PI)","Rio de Janeiro (RJ)","Rio Grande do Norte (RN)","Rio Grande do Sul (RS)","Rondônia (RO)","Roraima (RR)","Santa Catarina (SC)","São Paulo (SP)","Sergipe (SE)","Tocantins (TO)"];

function createStates(states){
    const elementState = document.querySelector("#state");

    for(let i=0 ; i<states.length ; i++){
        const option = document.createElement("option");
        option.value = states[i];
        option.innerText = states[i];

        elementState.appendChild(option);
    }
}
createStates(states);