frm = document.querySelector("form")
resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{
    e.preventDefault()

    valor = Number(frm.inNumero.value)
    resto = valor % 2

    if(resto  == 0){
        resp.innerText = `Numero  ${valor} é par`
    }else{
        resp.innerText = `Numero é ímpar ${valor}`
    }

frm.addEventListener("reset", ()=>{ 
    resp.innerText = " "
    
})
})