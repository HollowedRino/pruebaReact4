import './App.css';
import FormIngreso from './components/FormIngreso';
import ListadoComponentes from './components/ListadoComponentes';


function App() {
  let tem = [1,2,3,4,5];

  function solicitarRandoms(){
    console.log("Solicita random");
    //http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5
    let url_base = "http://www.randomnumberapi.com/api/v1.0/random";
    let numMin = document.getElementById("numMin").value;
    let numMax = document.getElementById("numMax").value;
    let cantRandom = document.getElementById("cantRandom").value;
    let url = url_base + "?min=" + numMin + "&max=" + numMax + "&count=" + cantRandom;
    console.log(url)
    fetch(url)
    .then(function(response){
      if(!response.ok){ // status 200
        throw Error("Ocurrio un error: " + response.statusText);
      }
    })
    .then(function(response){
      return response.json(); // response.text();
    })
    .then(function(data){
      console.log(data);
    })
    .catch(function(err){
      console.log("Ocurrio un error: " + err);
    });
    //fetch(url);
  }

  return (
    <>
      <h1>Uso de API para generar randoms</h1>
      <FormIngreso handlerClick={solicitarRandoms}/>
      <ListadoComponentes numeros={tem}/>
    </>
    
  );
}

export default App;
