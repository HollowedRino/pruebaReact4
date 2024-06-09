function FormIngreso({handlerClick}){

    function recuperarObjeto(){
        let obj_str = localStorage.getItem("persona");
        console.log(obj_str);
        let obj = JSON.parse(obj_str);
        console.log(obj);
    }


    return(
        <>
            <label for="cantRandom">Cantidad: </label>
            <input type="number" id="cantRandom" name="cantRandom"></input>
            <br/>
            <button type="button" onClick={handlerClick}>Generar</button>
            <button type="button" onClick={recuperarObjeto}>Recuperar Objeto</button>
        </>
    );
}

export default FormIngreso;