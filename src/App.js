import React from "react";
import MinharRotas from "./minhasRotas";

console.log("MY REACT VERSION => " + React.version);

function App() {
  return (
    <MinharRotas />
  )
}

export default App;









// import { useState } from "react";
// import Botoes from "./Botoes";
// import homem from "./homem.jpg";
// import mulher from "./mulher.jpg";

// function App() {
//   const [contadorHomem, setContadorHomem] = useState(0);
//   const [contadorMulher, setContadorMulher] = useState(0);
//   const [contadorTotal, setContadorTotal] = useState(0);

//   const incrementarHomem = () => {
//     setContadorHomem(contadorHomem + 1);
//     setContadorTotal(contadorTotal + 1);
//   }
//   const decrementarHomem = () => {
//     if (contadorHomem == 0)
//       return;
    
//     setContadorHomem(contadorHomem - 1);
//     setContadorTotal(contadorTotal - 1);
//   }

//   const incrementarMulher = () => {
//     setContadorMulher(contadorMulher + 1);
//     setContadorTotal(contadorTotal + 1);
//   }
//   const decrementarMulher = () => {
//     if (contadorMulher == 0)
//       return;
    
//     setContadorMulher(contadorMulher - 1);
//     setContadorTotal(contadorTotal - 1);
//   }

//   const resetTotal = () => {
//     setContadorHomem(0);
//     setContadorMulher(0);
//     setContadorTotal(0);
//   }
  
//   return (
//     <div className="bg-black flex justify-center items-center h-screen">
//       <div className="bg-white border border-black border-8 w-96 h-fit">
//         <div className="flex">
//           <div className="flex w-1/5"></div>

//           <div className="flex justify-center items-center w-3/5">
//             <h1 className="text-5xl">Total</h1>
//           </div>

//           <div className="flex justify-center items-center w-1/5">
//             <button
//                 class="text-center bg-orange-500 hover:bg-orange-700 text-white text-2md font-bold p-1 rounded-full"
//                 onClick={resetTotal}
//             >
//                 reset
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center items-center">
//           <div className="flex justify-center items-center border border-black border-2 w-2/5 h-16 rounded-lg">
//             <p className="text-4xl">{contadorTotal}</p>
//           </div>
//         </div>

//         <div className="flex">
//           <div className=" w-1/2 h-48">
//             <img src={homem} />
//           </div>
//           <div className=" w-1/2 h-48">
//             <img src={mulher} />
//           </div>
//         </div>

//         <div className="flex">
//           <Botoes incrementar={incrementarHomem} decrementar={decrementarHomem}/>
//           <Botoes incrementar={incrementarMulher} decrementar={decrementarMulher} />
//         </div>

//         <div className="flex">
//           <div className=" w-1/2 h-24">
//             <div className="flex justify-center items-center">
//               <h1 className="text-2xl">Homens</h1>
//             </div>

//             <div className="flex justify-center items-center">
//               <div className="flex justify-center items-center border border-black border-2 w-10/12 h-12 rounded-lg">
//                 <p className="text-2xl">{contadorHomem}</p>
//               </div>
//             </div>
//           </div>
//           <div className=" w-1/2 h-24">
//           <div className="flex justify-center items-center">
//               <h1 className="text-2xl">Mulheres</h1>
//             </div>

//             <div className="flex justify-center items-center">
//               <div className="flex justify-center items-center border border-black border-2 w-10/12 h-12 rounded-lg">
//                 <p className="text-2xl">{contadorMulher}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App;
