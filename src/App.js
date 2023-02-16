//import ComponenteButton from './components/ComponenteButton'
//import ComponenteTeste from './components/ComponenteTeste'
//import PropsTeste from './components/PropsTeste'
///import XPropsTypeTeste from './components/XPropsTypeTeste'
//import Evento from './components/Evento'
//import Condicional from './components/Condicional'
import Renderizacao from './components/Renderizacao';
import './App.css'


function App() {
  const texte = ["moura", "rodrigues", "gabriel"];
  return (
    
    <div className="App">
      <header className="App-header">
        <li>CONDICIONAL & RENDERIZAÇÃO</li>
        <Renderizacao  itens={texte}/>
      </header>
    </div>
  );
}

export default App;
