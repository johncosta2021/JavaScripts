function OutraLista({items}){
    return(
        <>
        <h3>Lista de coisas boas</h3>
        {items.length > 0 ? (
        items.map((itens, index) =>( // Percorrer uma listas
                <p key={index}>{itens}</p>
            ))) : (<p>Não há items na lista</p>)}
        </>
    )
}

export default OutraLista