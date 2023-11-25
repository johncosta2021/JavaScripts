// import logo from './logo.svg';
//import './App.css';
import "./index.css";
//import HelloWorld from './componentes/HelloWold';
//import SayMyName from './componentes/SayMyName';
//import Pessoa from './componentes/Pessoa';
//import Frases from "./componentes/Frases";
//import List from "./componentes/List";
import Evento from "../../componentes/evento";
import Form from "../../componentes/Form";
 

function App() {
  return (
        
    <div>  
      {/*
      <SayMyName nome="John"></SayMyName>
      <Frases></Frases>
      <Pessoa 
      nome="Maria"
      idade="24"
      profissão="Analista de Sistemas"
      foto="https://st4.depositphotos.com/1643295/30799/i/450/depositphotos_307997018-stock-photo-smart-teenage-boy-glasses-checking.jpg"
      ></Pessoa>
      <HelloWorld></HelloWorld>
      <h1>Teste</h1>
      <Frases></Frases>
      <List></List>   */}



      <h1>Testando Eventos</h1>
      <Evento></Evento>
      <Form></Form>
    </div>
    


  )
}

export default App;
