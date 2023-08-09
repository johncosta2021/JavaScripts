function verificar(){
    var data = new Date()               // Pegando a Hora e data do computador
    var ano = data.getFullYear()        // pegando o ano atual
    var f_ano = document.getElementById("txtano")
    var res = document.getElementById("res")
    

    if (f_ano.value.length == 0 || f_ano.value > ano){
        window.alert("[ERRO!!] Verifique os dados e tente novamente!.")
    } else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(f_ano.value)
        var genero = ""

        var img = document.createElement("img") /* linha 14 e 15 criano uma tag <img id='foto'> */
        img.setAttribute("id", "foto") // CRIANDO TAG IMG COM O id='foto'

        if (fsex[0].checked){ // Verificando se estiver marcado
            genero = "Homen"
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute("src", "img/crianca_menino.jpg") //Adicionando a foto na tag img
            } else if (idade <=20){
                //jovem
                img.setAttribute("src", "img/menino.jpg")
            } else if (idade <= 50){
                //adulto
                img.setAttribute("src", "img/homen_adulto.jpg")
            }else{
                //idoso
                img.setAttribute("src", "img/homen_idoso.jpg")
            }
        } else if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute("src", "img/crianca_menina.jpg")
            }else if (idade <=20){
                //jovem
                img.setAttribute("src","img/menina.jpg")
            }else if (idade <= 50){
                //adulto
                img.setAttribute("src", "img/mulher_adulta.jpg")
            }else{
                //idoso
                img.setAttribute("src", "img/mulher_idosa.jpg")
            }
            
        }
        res.style.textAlign = "center" // Centralizando o conteúdo sem CSS
        res.innerText = `Detectamos ${genero} com ${idade} anos!`
        res.appendChild(img) // Mostrando a imagem na tela.
    }
}