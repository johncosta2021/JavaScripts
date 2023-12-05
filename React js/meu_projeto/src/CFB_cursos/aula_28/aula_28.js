import React,{useState,useEffect} from "react";
import Pagina1 from "./pagina1";
import Pagina2 from "./pagina2";

function Aula_28(){
    const [pagina,setPagina]=useState(0)

    useEffect(
        ()=>{
            const url = window.location.href
            const resp = url.split("?") //pegar o número da página apartir do '?'
            setPagina(resp[1])
        }
    )

    const LinksPaginas=(p)=>{
        if(p==1){
            window.open("http://localhost:3000?1","_self")
        }else if(p==2){
            window.open("http://localhost:3000?2","_self")
        }
    }

    const retornarPagina=()=>{
        if(pagina==1){
            return <Pagina1/>
        }else if(pagina==2){
            return <Pagina2/>
        }else{
            return  <div>
                        <button onClick={()=>LinksPaginas(1)}>Página 1</button>
                        <button onClick={()=>LinksPaginas(2)}>Página 2</button>
                    </div>
        }
    }
    return(
        <>
            {retornarPagina()}
        </>
    )
}

export default Aula_28