import { useState } from "react";
import ComponenteButton from "./ComponenteButton";
import Rotas from "./Rotas";

export default function Evento() {
  const [rota, setRota] = useState(null);
  const [dados, setDados] = useState(null);


  async function Evento() {
    const response = await fetch(Rotas({ rota: '1', busca: "notebook-3" }));
    const json = await response.json();
    setDados(json);
  }
  return (
    <>
      {JSON.stringify(dados)}
      <ComponenteButton url={Evento} valor={rota} />
    </>
  );
}
