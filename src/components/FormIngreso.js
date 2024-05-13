function FormIngreso({handlerClick}){
    return(
        <>
            <label for="cantRandom">Cantidad: </label>
            <input type="number" id="cantRandom" name="cantRandom"></input>
            <br/>
            <button type="button" onClick={handlerClick}>Generar</button>
        </>
    );
}

export default FormIngreso;