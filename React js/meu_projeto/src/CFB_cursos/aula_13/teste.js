import React from "react";

function Teste(){
    const carros = ["Corolla","SW4","H20","D20","Fiat"]

    const lista = carros.map(
        (c,i)=>
        <p>{i} - {c}</p>
    )
    return(
        <>
        {lista}
        </>
    )
}
export default Teste