import { useState, useEffect } from "react";

export function Letreiro() {
  const [letreiro, setLetreiro] = useState(" ");

  useEffect(() => {
    function ficarPiscando() {
      let piscar = " ";
      let i = 1;
      let auxPiscar = false;

      const piscarInterval = setInterval(() => {
        if (i > 6) clearInterval(piscarInterval);

        setLetreiro(piscar);

        piscar = auxPiscar ? " " : ".";
        i++;
        auxPiscar = !auxPiscar;
      }, 500);

      return true;
    }

    function escrevaTexto() {
      let msg = "Seja bem-vindo à Fatec!";
      let i = 1;

      const myInterval = setInterval(() => {
        if (i === msg.length) clearInterval(myInterval);

        let msgFinal = msg.substring(0, i);
        setLetreiro(msgFinal);
        i++;
      }, 50);
    }

    function carregarLetreiro() {
      ficarPiscando();
      setTimeout(escrevaTexto, 4000);
    }

    carregarLetreiro();
  }, []);

  return <p style={{ whiteSpace: "pre-wrap" }}>{letreiro}</p>;
}
