import { useState } from "react";

function UseStateTeste({valorInicial}) {
  const [valor, setValor] = useState(valorInicial);
  setValor(valor + 1);
  console.log(valor);
}

export default UseStateTeste;
