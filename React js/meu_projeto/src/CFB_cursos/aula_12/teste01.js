import React,{useState} from "react";


export default function Teste01(){
    const [cor,setCor] = useState(1)

    const vermelho = {color:"#f00"}
    const verde = {color: "#0f0"}
    const azul = {color:"#00f"}

    const retcor=(c)=>{
        if(c==1){
            return vermelho
        } else if(c==2){
            return verde
        }else{
            return azul
        }
    }
    const mudarCor=()=>{
        setCor(cor+1)
        if(cor >2){
            setCor(1)
        }
    }

    return(
        <>
        <h1 style={retcor(cor)}>CFB_cursos</h1>
        <button onClick={()=>mudarCor()}>Muda Cor</button>
        </>
    )
}