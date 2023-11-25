import React from "react";

export default function Dados(props){
    var n1 = 50
    var n2 = 10
    function soma(n1,n2){
        return (n1 + n2)
    }
    return(
        
        <section>
            <p style={{color:"red", fontSize:"40px"}}>Canal:{props.canal}</p>
            <p>Youtube:{props.youtube}</p>
            <p className="texto">Cursos:{props.cursos}</p>
            <p>{`A soma de ${n1} + ${n2} = ${soma(n1,n2)}`}</p>
        </section>
    )
}