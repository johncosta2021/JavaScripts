function verificar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        alert("Dados incorreto")
    }else{
        res.innerHTML = "Contando..."
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert("Passo Invalido! Considerando passo 1!")
            p = 1
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c = c + p){
                res.innerHTML += `${c} => `
            }
        }else{
            // Descrecente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} => `
            }
        }
    res.innerHTML += `👍`
    }
}