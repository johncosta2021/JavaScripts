import { useState } from "react";
import React from "react";
import led_verde from "./img/led_verde.jpg"
import led_vermelho from "./img/led_vermelho.png"

function Led(){
    const [ligado, setLigado] = useState(false)
    return(
        <>
            <img style={{width:"200px"}} src={ligado?led_verde:led_vermelho}></img>
            <button onClick={()=>setLigado(!ligado)}>{ligado?"Desligar":"Ligar"}</button>
        </>
    )
}

export default Led