import { useState } from "react";
import { Link } from "react-router-dom";

const Atv03 = () => {
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("Erro");
    }
  };

  const plusMinus = () => {
    //do that
  }

  const percent = () => {
    //do that
  }

  const clear = () => {
    setResult('');
  };

  return (
    <div className="bg-slate-900 flex flex-col gap-4 justify-center items-center h-screen">
      <div className="bg-black w-96 h-fit rounded-2xl text-white">
        <div>
          <input className="text-purple-600" type="text" value={result} readOnly />

          <div className="w-full h-20">
            <button className="botao-calc-num" onClick={() => clear()}>A/C</button>
            <button className="botao-calc-num" onClick={() => plusMinus()}>⁺∕₋</button>
            <button className="botao-calc-num" onClick={() => percent()}>%</button>
            <button className="botao-calc-op" onClick={() => handleClick('/')}>÷</button>
          </div>

          <div className="w-full h-20">
            <button className="botao-calc-num" onClick={() => handleClick('7')}>7</button>
            <button className="botao-calc-num" onClick={() => handleClick('8')}>8</button>
            <button className="botao-calc-num" onClick={() => handleClick('9')}>9</button>
            <button className="botao-calc-op" onClick={() => handleClick('*')}>×</button>
          </div>
          
          <div className="w-full h-20">
            <button className="botao-calc-num" onClick={() => handleClick('4')}>4</button>
            <button className="botao-calc-num" onClick={() => handleClick('5')}>5</button>
            <button className="botao-calc-num" onClick={() => handleClick('6')}>6</button>
            <button className="botao-calc-op" onClick={() => handleClick('-')}>-</button>
          </div>
          
          <div className="w-full h-20">
            <button className="botao-calc-num" onClick={() => handleClick('1')}>1</button>
            <button className="botao-calc-num" onClick={() => handleClick('2')}>2</button>
            <button className="botao-calc-num" onClick={() => handleClick('3')}>3</button>
            <button className="botao-calc-op" onClick={() => handleClick('+')}>+</button>
          </div>

          <div className="w-full h-20">
            <button className="botao-calc-num" onClick={() => handleClick('0')}>0</button>
            <button className="botao-calc-num" onClick={() => handleClick('.')}>,</button>
            <button className="botao-calc-op" onClick={() => calculate()}>=</button>
          </div>

          {/* <div className="w-full h-20">
            <button className="botao-calc-op" onClick={() => clear()}>Limpar</button>
          </div> */}
        </div>
      </div>

      <div>
        <Link className="botao-voltar" to="/">
          ⇐ Retornar para Home
        </Link>
      </div>
    </div>
  );
};

export default Atv03;
