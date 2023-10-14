import { useState } from "react";

function Condicional(){

    const [email, setEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        console.log("Com sucesso")
    }
    return (
        <div>
            <h2>Cadastre o seu E-mail aqui:</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar-Email</button>
        </div>
    )
}

export default Condicional