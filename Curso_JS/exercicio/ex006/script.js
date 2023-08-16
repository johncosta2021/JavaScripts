let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if (Number(n) > 0 && Number(n) < 101){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else{
        window.alert("Valores inválidos ou já adicionado na lista.")
    }
    num.value = "" // limpar automaticamente os valore do input
    res.focus() // sempre deixar o curso ativo no input
}

function finalizar(){
    if (valores.length == 0){
        window.alert("Adicionar valores antes de finalizar!")
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores){
            soma += valores[pos] // somar todos os valores adicionado
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todos, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `O menor valor informado foi ${menor}.`
        res.innerHTML += `Somando todos os valores, temos ${soma}.`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
    }
}