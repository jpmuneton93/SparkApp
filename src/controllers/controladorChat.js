let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajeChat=document.getElementById("mensajeChat")

let preguntas=[
    "¿Cuál es tu nombre?",
    "¿Cuántos años tienes?", 
    "¿Cuál es tu película favorito?", 
    "¿Tienes mascotas?",
    "¿Cuál es tu hobby?"
]

let respuestas=[
    "Hola humano, mi nombre es: SparkBot",
    "Tengo 1 año de vida",
    "Mi película favorita es: Star Wars",
    "No tengo mascotas",
    "Mi hobby es: Programar"
]

//variable para contar el numero de preguntas
let indicePregunta=0

//función para detectar el inicio y desarrollo de la conversación
function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta, index)=>`${index+1}. ${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="text-start">Hola bienvenido <br> ${listaPreguntas}</p>`

    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajeChat.innerHTML+=`<p class="text-start">${preguntas[numeroPregunta]}</p>`
            mensajeChat.innerHTML+=`<p class="text-end">${respuestas[numeroPregunta]}</p>`

        }
    }
}

//rutina para activar el chatbot
botonSend.addEventListener("click", procesarEntradaChat)

textoChat.addEventListener("keypress", function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradaChat()
    }
})