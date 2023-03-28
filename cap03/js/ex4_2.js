const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    //const masculino = frm.inMasculino.checked

    //Formas de corrigir o erro acima.
    //const masculino = document.querySelector("input[type='radio'")
    const masculino = document.querySelectorAll('input.sexo')
    const altura = Number(frm.inAltura.value)

    let peso 
    if (masculino){
        peso = 22 * Math.pow(altura, 2)
    }else {
        peso = 21 * Math.pow(altura, 2)
    }
    /**
     * Como ficaria a mesma expressão com operador ternario
     * const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)
     */
    //Apresentar a resposta.
    resp.innerText = `${nome}: Seu peso ideal é:  ${peso.toFixed(3)} Kg`

    frm.addEventListener("reset", () =>{
        resp.innerText = "" //Limpa o conteudo quando clicakr no reset.
    })
})