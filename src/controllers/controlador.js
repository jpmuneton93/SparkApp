function cambiarCaja(){
    let boton=document.getElementById("botonChat")
    let cajaChat=document.getElementById("cajaChat")

    if(cajaChat.style.display=='none' || cajaChat.style.display==''){    /* || es para decir "o" */
        cajaChat.style.display='block'
    }else{
        cajaChat.style.display='none'
    }

}

