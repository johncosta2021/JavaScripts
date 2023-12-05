import React from "react";

export default function Nota(props){
    return(
        <>
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="number" min={0} value={props.nota} onChange={(e)=>props.setNota(e.target.value)}></input>
        </div>
        </>
    )
}