import ComponenteTeste from './components/ComponenteTeste'
import PropsTeste from './components/PropsTeste'
import './App.css'


function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <li>teste CSS</li>
        <ComponenteTeste />
        <PropsTeste nome="gabriel" idade={12} genero="Masculino"/>
      </header>
    </div>
  );
}

export default App;
