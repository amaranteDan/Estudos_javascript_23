const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    //Obtem e converte o Hora do campo inHoraBrasil
    const horaBrasil = Number(frm.inHoraBrasil.value)

    let horaFranca = horaBrasil + 5

    if(horaFranca > 24){
        horaFranca = horaFranca - 24 //subtrai 24 
    }
    //Exibe resposta
    resp.innerText = `Horario na França ${horaFranca.toFixed(2)}`
})