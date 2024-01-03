import React,{useState} from "react";
import TabelaIMC from "./tabelaimc";
import Peso from "./peso"
import Altura from "./altura"
import CalcularIMC from "./calculaimc";
import Resultado from "./resultado";

export default function Aula_31(){
    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [resultado,setResultado]=useState(0)
    return(
        <>
            <TabelaIMC/>
            <Peso p={peso} sp={setPeso}/>
            <Altura a={altura} sa={setAltura}/>
            <CalcularIMC a={altura} p={peso} sr={setResultado}/>
            <Resultado r={resultado}/>

        </>
    )
}