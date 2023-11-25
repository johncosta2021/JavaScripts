import React,{userState} from "react";

function Numero(props){
    const [num,setNum] = userState(10)
    return(
        <p>
            <p>Valor do State num em Numero: {props.num}</p>
            <button onClick={""}> Soma 10</button>
        </p>
    )
}

export default Numero