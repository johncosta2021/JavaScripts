import style from "./Frase.Module.css" // esse style funciona com o *args do python
function Frases(){
    return(
        <div className={style.frasesContainer}> {/* chamando as classe do outro arquivo */}
            <p className={style.fraseContent}>Este é meu primeiro components com uma frase!</p>
        </div>
    )
}

export default Frases