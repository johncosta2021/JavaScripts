import React from "react";

export default function Nota(props){
    return(
        <>
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="number" min={0} name={props.nome} value={props.nota} onChange={(e)=>props.setNota(e)}></input>
        </div>
        </>
    )
}