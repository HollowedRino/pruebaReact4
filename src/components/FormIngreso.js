function FormIngreso({handlerClick}){
    return(
        <>
            <label for="numMin">Valor minimo: </label>
            <input type="number" id="numMin" name="numMin"></input>
            <br/>
            <label for="numMax">Valor maximo: </label>
            <input type="number" id="numMax" name="numMax"></input>
            <br/>
            <label for="cantRandom">Cantidad: </label>
            <input type="number" id="cantRandom" name="cantRandom"></input>
            <br/>
            <button type="button" onClick={handlerClick}>Generar</button>
        </>
    );
}

export default FormIngreso;