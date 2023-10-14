import Button from "./Button"
function Evento() {

    function meuEvento(){
        alert("Opa, fui ativado")
    }

    return (
        <div>
            <p>
                Clique para disparar um Evento:
            </p>
            <Button event={meuEvento}/>
            <button onClick={meuEvento}>Ativar! </button>
        </div>
    )
}

export default Evento