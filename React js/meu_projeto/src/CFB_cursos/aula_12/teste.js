import React, {useState} from "react";

export default function Teste(){
    const [log,setlog] = useState(false)
    const cumprimento=()=>{
        const hora = new Date().getHours();
        
        if (hora >=0 && hora <=12){
            return <p>Bom dia</p>
        }else if(hora > 12 && hora <=18){
            return <p>Boa tarde</p>
        }else{
            return <p>Boa noite</p>
        }
    }

    return(
        <div>
            {cumprimento()}
        </div>
    )
}

