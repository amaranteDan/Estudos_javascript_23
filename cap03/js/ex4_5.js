const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {

    e.preventDefault();
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)

    if(Number.isInteger(raiz)) {
        resp.innerText = `Raiz: ${raiz}`
    }else {
        resp.innerText = `Não há raiz exata para ${raiz.toFixed(2)}`
    }
    frm.addEventListener("reset", ()=>{
        resp.innerText = "";
    })
    
})