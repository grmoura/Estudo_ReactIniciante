import { useState } from "react";
import ComponenteButton from "./ComponenteButton";

export default function Condicional({ inicio }) {
  const [situacao, setSituacao] = useState(null);

  function CondicionalEvent() {
    setSituacao(situacao + 1);
    console.log(situacao);
  }

  return (
    <>
      <h1>Condicional</h1>
      <ComponenteButton url={CondicionalEvent} valor={1} />
      {situacao === null ? 
      (<p>ok{situacao}</p>) : ('qweqweq')
      }
    </>
  );
}
