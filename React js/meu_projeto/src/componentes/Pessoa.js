function Pessoa(p){
    return(
        <div>
            <img src={p.foto} alt={p.nome}></img>
            <h2>Nome: {p.nome}</h2>
            <p>Idade: {p.idade}</p>
            <p>Profissão: {p.profissão}</p>
        </div>
    )
}

export default Pessoa