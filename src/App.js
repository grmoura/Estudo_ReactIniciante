import ComponenteButton from './components/ComponenteButton'
import ComponenteTeste from './components/ComponenteTeste'
import PropsTeste from './components/PropsTeste'
import XPropsTypeTeste from './components/XPropsTypeTeste'
import Evento from './components/Evento'
import './App.css'


function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <li>teste CSS</li>
        <ComponenteTeste />
        <Evento />
        <PropsTeste nome="gabriel" idade={12} genero="Masculino"/>
        <XPropsTypeTeste nome="BIRULEILEI"  ano={2023} marca={false} />
   
      </header>
    </div>
  );
}

export default App;
