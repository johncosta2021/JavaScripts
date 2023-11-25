import React,{useState} from "react"

function Aula_14(){

    const [nome,setNome] = useState("")
    const [carro,setCarro] = useState("")

    return(
        <>
        <label>Digite seu nome: </label>
        <input type="text" name="fnome" value={nome}
        onChange={(e)=>setNome(e.target.value)}/>
        <p>Nome Digitado: {nome}</p>

        <label>Selecione um carro: </label>
        <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
            <option value="hd20" > HD20</option>
            <option value="Golf" > Golf</option>
            <option value="Cruze" > Cruze</option>
            <option value="Argo" > Argo</option>
        </select>
        <p>Carro Selecionado: {carro}</p>
        </>
    )

}

export default Aula_14