import React from 'react';
import Board from './Board';

function Atv06() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Jogo da Memória</h1>
        <Board />
      </div>
    </div>
  );
};

export default Atv06;