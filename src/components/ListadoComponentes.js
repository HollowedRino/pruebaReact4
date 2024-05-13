function ListadoComponentes({personas}){
    let listItems = personas.map(per => <li>{ per.name.first }</li>);
    return(
        <>
            <ul>
                {listItems}
            </ul>
        </>
    );
}

export default ListadoComponentes;