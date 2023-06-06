import React from "react";
import Board from "./Board";
import { Link } from "react-router-dom";

function Atv06() {
  return (
    <div className="bg-slate-900 flex flex-col gap-5 items-center justify-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Jogo da Memória</h1>
        <Board />
      </div>

      <div>
        <Link className="botao-voltar" to="/">
          ⇐ Retornar para Home
        </Link>
      </div>
    </div>
  );
};

export default Atv06;