import React, {useEffect,useState} from "react";

export default function Aula_19(){
    const [contagem,setContagem] = useState(0)

    useEffect(
        ()=>{console.log("Pagina Carregada")
        document.title="Contagem:"+contagem
    }
    )
    return(
        <>
            <p>Contagem: {contagem}</p>
            <button onClick={()=>setContagem(contagem+1)}>Contar</button>
        </>
    )
}