const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//Cria o listener
frm.addEventListener("submit", (e) => {
    const quilo = Number(frm.inQuilo.value)
    const consumo = Number(frm.inConsumo.value)

    const valor = (quilo / 1000) * consumo // calcular valor a ser pago
    resp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`
    e.preventDefault()
});