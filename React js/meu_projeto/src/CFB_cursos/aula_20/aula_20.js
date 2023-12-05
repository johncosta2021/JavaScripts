import React,{useState} from "react";
export default function Aula_20(){
    const [nome,setNome] = useState()

    const armazenar=(chave,valor)=>{
        localStorage.setItem(chave,valor)
    }
    const consultar=(chave)=>{
        alert(localStorage.getItem(chave))
    }
    const apagar=(chave)=>{
        localStorage.removeItem(chave)
    }

    return(
        <>
            <label>Digite um nome: </label>
            <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}></input><br/>
            <button onClick={()=>armazenar("ls-nome",nome)}>Gravar nome</button>
            <button onClick={()=>consultar("ls-nome")}>Ver nome</button>
            <button onClick={()=>apagar("ls-nome")}>Remover nome</button>
        </>
    )
}