function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")

    if (num.value.length == 0){
        alert("Por favor, Digite um número")
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = "" // limpar a tabuada
        while(c <=10){
            let item = document.createElement("option") // criar option dentro da tag select
            item.text = `${n} x ${c} = ${n * c}` // Parte de dentro do option
            tab.appendChild(item) //Adicionando os valores dentros da tabelas
            c++
        }
    }
}