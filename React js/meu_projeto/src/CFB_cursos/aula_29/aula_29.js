import React,{useState} from "react";

const carros = [
    {categoria:"Esporte",preco:"110000",modelo:"Golf GTI"},
    {categoria:"Esporte",preco:"122000",modelo:"Camaro"},
    {categoria:"SUV",preco:"85000",modelo:"HRV"},
    {categoria:"Utilitario",preco:"9000",modelo:"Hillux"}
]

const linhas=(cat)=>{
    const li=[]
    carros.forEach(
        (carro)=>{
            if(carro.categoria.toUpperCase()==cat.toUpperCase || cat.toUpperCase()==""){
                li.push(
                    <tr>
                        <td>{carro.categoria}</td>
                        <td>{carro.preco}</td>
                        <td>{carro.modelo}</td>
                    </tr>
                )
            }
        }
    )
    return li
} 

const TabelaCarros=(cat)=>{
    return(
        <table border="1" style={{borderCollapse:"collapse"}}>
            <thead>
                <tr>Categoria</tr>
                <tr>modelo</tr>
            </thead>
            <tbody>
                {linhas(cat)}
            </tbody>
        </table>
    )
}

const pesquisaCategoria=(cat,scat)=>{
    return(
        <div>
            <label>Digite uma Categoria </label>
            <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
        </div>
    )
}

export default function Aula_29(){
    const [categoria,setcategoria]=useState("")

    return(
        <>
            {pesquisaCategoria(categoria,setcategoria)}
            <br/>
            {TabelaCarros(categoria)}
        </>
    )
}