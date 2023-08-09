function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundo = data.getSeconds()

    msg.innerHTML = `Agora são ${hora}:${minutos};${segundo}`;

    if (hora > 0 && hora < 12){
        img.src = "img/manhã.jpg"
        document.body.style.background = "#F0C58C"

    } else if (hora >= 12 && hora < 18){
        img.src = "img/tarde.jpg"
        document.body.style.background = "#D8C7AF"
    } else{
        img.src = "img/noite.jpg"
        document.body.style.background = "#987CAF"
    }
    
}
