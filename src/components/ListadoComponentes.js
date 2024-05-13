function ListadoComponentes({numeros}){
    let listItems = numeros.map(n => <li>{n}</li>);
    return(
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
}

export default ListadoComponentes;