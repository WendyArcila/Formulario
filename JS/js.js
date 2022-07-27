
var nombre = document.getElementById('nombre')

var mail = document.getElementById('mail')
var asunto = document.getElementById('asunto')
var msg = document.getElementById('msg')

const resete = document.querySelector('#resete')
const send = document.querySelector('#send')


send.addEventListener('click', ()=>{
    const name1 = nombre.value
    const email1 = mail.value
    const asunto1 = asunto.value
    const msg1 = msg.value

    const nameL =name1.length
    const emailL =email1.length
    const asuntoL =asunto1.length
    const msgL =msg1.length

    if(nameL <= 0){
        alert("Ingrese primero el nombre")
    }else if(emailL <= 0) {
        alert("Ingrese primero el correo electrónico")
    }else if(asuntoL <=0){
        alert("Ingrese primero el asunto")
    }else if(msgL <= 0){
        alert("Ingrese primero el mensaje")
    }else{
        console.log("nombre: "+ name1)
        console.log("correo: "+ email1)
        console.log("asunto: "+ asunto1)
        console.log("mensaje: "+ msg1)
    }

})


