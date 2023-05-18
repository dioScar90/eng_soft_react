import { useState } from "react";
import { Link } from "react-router-dom";

const Atv05 = () => {
  const [result, setResult] = useState('');

  const handleClick = value => setResult(result + value);
  
  const calculate = () => {
    try {
      console.log(result);
      setResult(eval(result));
    } catch (error) {
      setResult("Erro");
    }
  };

  const isThereOperator = () => {
    const operators = ['+', '-', '*', '/'];

    const idx = operators.reduce((acc, curr) => {
      const i = result.indexOf(curr);
      if (i > -1)
        acc = i;
      return acc;
    }, -1);
    
    return idx;
  }

  const changeLastNumber = (idx, fator2) => {
    if (idx === -1) {
      setResult(eval(`${result}*${fator2}`));
      return;
    }
    
    const part1 = result.substring(0, idx + 1);
    const part2 = result.substring(idx + 1);
    const newPart2 = eval(`${part2}*${fator2}`);
    const newResult = part1 + newPart2;
    setResult(newResult);
  }

  const plusMinus = () => {
    const idx = isThereOperator();
    changeLastNumber(idx, "-1");
  }

  const percent = async () => {
    const calcBtn = document.querySelector("#calculate");

    const idx = await isThereOperator();
    await changeLastNumber(idx, "0.01");
    
    calcBtn.click();
  }

  const clear = () => setResult('');

  const getResult = () => result.toString().replace('*', '×').replace('/', '÷');
  
  const classDivGrupo = () => `grid grid-cols-4 bg-black-900`;
  const classDivBotao = (mais = '') =>
    `${mais} flex-1 px-2 py-2 justify-center flex items-center text-white text-base font-semibold`;
  
  return (
    <div className="bg-slate-900 flex flex-col gap-4 justify-center items-center h-screen">
      <div className="bg-black w-fit h-fit rounded-2xl text-white">
        <div>
          <div className="flex justify-center">
            <input className="text-gray-200 bg-zinc-900 font-bold rounded-md mt-2 px-5 text-right w-4/5" type="text" value={getResult()} readOnly />
          </div>
          
          <div className={classDivGrupo()}>
            <div className={classDivBotao()}>
              <button className="botao-calc-top" onClick={() => clear()}>A/C</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-top" onClick={() => plusMinus()}>⁺∕₋</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-top" onClick={() => percent()}>%</button>
              {/* <button className="botao-calc-top" onClick={() => handleClick("/100")}>%</button> */}
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-op" onClick={() => handleClick('/')}>÷</button>
            </div>
          </div>

          <div className={classDivGrupo()}>
            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('7')}>7</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('8')}>8</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('9')}>9</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-op" onClick={() => handleClick('*')}>×</button>
            </div>
          </div>
          
          <div className={classDivGrupo()}>
            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('4')}>4</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('5')}>5</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('6')}>6</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-op" onClick={() => handleClick('-')}>-</button>
            </div>
          </div>
          
          <div className={classDivGrupo()}>
            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('1')}>1</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('2')}>2</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('3')}>3</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-op" onClick={() => handleClick('+')}>+</button>
            </div>
          </div>

          <div className={classDivGrupo()}>
            <div className={classDivBotao("col-span-2")}>
              <button className="botao-calc-num-zero" onClick={() => handleClick('0')}>0</button>
            </div>

            <div className={classDivBotao()}>
              <button className="botao-calc-num" onClick={() => handleClick('.')}>,</button>
            </div>

            <div className={classDivBotao()}>
              <button id="calculate" className="botao-calc-op" onClick={() => calculate()}>=</button>
            </div>
          </div>
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

export default Atv05;
