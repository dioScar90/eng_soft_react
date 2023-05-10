// import React from "react";

function Botoes({incrementar, decrementar}) {
    return (
        <div className="flex  w-1/2 h-24">
            <div className="flex justify-center items-center  w-1/2 h-full">
                <button
                    className="bg-green-500 hover:bg-green-700 text-white  font-bold h-16 w-16 rounded-full flex items-center justify-center"
                    onClick={incrementar}
                >
                    +
                </button>
            </div>
            <div className="flex justify-center items-center  w-1/2 h-full">
                <button
                    class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold h-12 w-12 rounded-full"
                    onClick={decrementar}
                >
                    -
                </button>
            </div>
        </div>
    )
}

export default Botoes;