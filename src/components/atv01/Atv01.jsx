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
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <div>
          <h1>Hello, world!</h1>
          <Letreiro />
          <Horario />
        </div>
        {/* <div className="bg-white border border-black border-8 w-96 h-fit"> */}
        <div>
          <Link to="/">&lt;&lt; Retornar para Home</Link>
        </div>
      </header>

      
    </div>
    
  );
}

export default Atv01;
