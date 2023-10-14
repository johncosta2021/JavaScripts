import { useState } from "react"
function Form(){
    function cadastrarUsuário(e){
        console.log("Usuário foi cadastrado com sucesso!")
        e.preventDefault() // congelar os dados no console do navegador
        console.log(`Cadastrou o usuário ${name} foi cadastrado com a senha: ${password}`)
    }
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <>
        <h1>Meu Cadastro:</h1>
        <form onSubmit={cadastrarUsuário}>
            <p>
                <label htmlFor="name">Nome:</label>
                <input type="text" onChange={(e)=> setName(e.target.value)} id="name" name="name" placeholder="Digite seu nome aqui.."/>
            </p>
            <p>
                <label htmlFor="senha">Senha:</label>
                <input type="password" onChange={(e)=> setPassword(e.target.value)} id="senha" name="senha" placeholder="Digite sua senha aqui"/>
            </p>
            <p>
                <input type="submit" value="Cadastrar"/>
            </p>
        </form>
        </>
    )
}

export default Form