import React,{useState} from "react";

const tabelaIMC=()=>{
return(
    <table border="1" style={{borderCollapse:"collapse"}}>
            <thead>
                <tr>
                    <th>Classificação</th>
                    <th>Imc</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do Peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso Normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau 1</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td> Obesidade Grau 2</td>
                    <td> Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td> Obesidade Grau 3</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}

const fpeso=(p,sp)=>{
    return(
        <div>
            <label>
                Peso: <input type="text" value={p} onChange={(e)=>{sp(e.target.value)}}/>
            </label>
        </div>
    )
}

const faltura=(a,sa)=>{
    return(
        <div>
            <label>
                Altura: <input type="text" value={a} onChange={(e)=>{sa(e.target.value)}}/>
            </label>
        </div>
    )
}

const fCalcular=(p,a,sr)=>{
    const calc=()=>{
        sr(p/(a*a))
    }
    return(
        <div>
            <button onClick={calc}>Calcular</button>
        </div>
    )
}

const fresultado=(r)=>{
    return(
        <div>
            <p>Resultado: {r.toFixed(2)}</p>
        </div>
    )
}

function Aula_30(){

    const [peso,setPeso]=useState(0)
    const [altura,setAltura]=useState(0)
    const [resultado,setResultado]=useState(0)


    return(
        <>
            {tabelaIMC()}
            {faltura(altura,setAltura)}
            {fCalcular(peso,altura,setResultado)}
            {fpeso(peso,setPeso)}
            {fresultado(resultado)}

        </>
    )
}

export default Aula_30