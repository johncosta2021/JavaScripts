import React,{useState} from "react"
export default function Aula_15(){
    const [form,setForm]=useState({"nome":"","curso":"","ano":""})
    const formChange=(e)=>{
        if(e.target.getAttribute("name") == "fnome"){
            setForm({"nome":e.target.value, "curso":form.curso, "ano":form.ano})
        }else if(e.target.getAttribute("Curso") == "fcurso"){
            setForm({"nome":form.nome, "curso":e.target.value, "ano":form.ano})
        }else if(e.target.getAttribute("Ano") == "fano"){
            setForm({"nome":form.nome, "curso":form.curso, "ano":e.target.value})
        }
    }
    return(
        <>
        <label>Nome:</label>
        <input type="text" name="fnome" value={form.nome} onChange={(e)=>formChange(e)}/><br/>
        <label>Curso</label>
        <input type="text" name="fcurso" value={form.curso} onChange={(e)=>formChange(e)}/><br/>
        <label>Ano</label>
        <input type="text" name="fano" value={form.ano} onChange={(e)=>formChange(e)}/><br/>

        <p>Nome Digitado: {form.nome}</p>
        <p>Nome do Cursos: {form.curso}</p>
        <p>Ano: {form.ano}</p>
        </>
    )
}