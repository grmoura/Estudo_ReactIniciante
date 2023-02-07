import { useState } from "react";
import Rotas from "./Rotas";

export default function MetodoGet({ url }) {

  async function get() {
    const response = await fetch(Rotas({ rota: url, busca: "notebook-3" }));
    const json = await response.json();

    return json;
  }

  return get()
}
