import './App.css';
import FormIngreso from './components/FormIngreso';
import ListadoComponentes from './components/ListadoComponentes';
import { useState } from 'react';

function App() {
  let tem = [];
  const [listaPersonas, setListaPersonas] = useState([]);

  async function solicitarRandoms(){
    console.log("Solicita random");
    //https://randomuser.me/api/?results=10
    let url_base = "https://randomuser.me/api/";
    let cantRandom = document.getElementById("cantRandom").value;
    let url = url_base + "?results=" + cantRandom;
    console.log(url);
    
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setListaPersonas([
      ...data.results
    ]);

    localStorage.setItem("key01", "valor01");
    const valor = localStorage.getItem("key01");
    console.log(valor);

    let obj1 = {nombre: "Juan", apellido: "Perez", edad: 30};
    localStorage.setItem("persona", JSON.stringify(obj1));

    sessionStorage.setItem("skey01", "valor01");
    const svalor = sessionStorage.getItem("skey01");
    console.log(svalor);
  }

  return (
    <>
      <h1>Uso de API para generar randoms</h1>
      <FormIngreso handlerClick={solicitarRandoms}/>
      <ListadoComponentes personas={listaPersonas}/>
    </>
    
  );
}

export default App;
