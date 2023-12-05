import React,{useState} from "react";
import Global from "./global";

export default function Aula_27(){

    const [resumo,setResumo] = useState(Global.resumo)

    const gravarResumo=()=>(
        Global.resumo = resumo
    )
    
    const verResumo=()=>{
        alert(Global.resumo)
    }
    return(
        <>
            <p>{"Canal: " + Global.canal}</p>
            <p>{"Cursos: " + Global.curso}</p>
            <p>{"Ano: " + Global.ano}</p>
            <hr/>
            <input type="text" value={resumo} onChange={(e)=>setResumo(e.target.value)}></input>
            <button onClick={()=>gravarResumo()}>Gravar Resumo</button>
            <button onClick={()=>verResumo()}>Ver Resumo</button>
        </>
    )
}