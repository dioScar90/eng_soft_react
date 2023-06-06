import { useState, useEffect } from "react";

export function Horario() {
  const [horario, setHorario] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      const horario = new Date().toLocaleTimeString();
      setHorario(horario);
    }, 1000);
  });

  return (
    <p>
      Agora são: <strong>{horario}</strong>.
    </p>
  );
}
