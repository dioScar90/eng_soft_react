import logo from './logo.svg';
import { Horario } from './Horario';
import { Letreiro } from './Letreiro';
import { Link } from 'react-router-dom';
import '../../App.css';

function Atv01() {
  return (
	  
	 
    <div className="Atv01">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>
          <h1>Hello, world!</h1>
          <Letreiro />
          <Horario />
        </div>
        
        <div>
          <Link className="botao-voltar" to="/">
            ⇐ Retornar para Home
          </Link>
        </div>
      </header>

      
    </div>
    
  );
}

export default Atv01;
