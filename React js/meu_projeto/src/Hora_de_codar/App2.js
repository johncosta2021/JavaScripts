import OutraLista from "../../componentes/OutraLista"
function App(){
    const meusItems = ["React", "Vue","Angular"]
    return (
        <>
        <h1>Renderização de Listas</h1>
        <OutraLista items={meusItems}></OutraLista>
        </>
    )
}

export default App