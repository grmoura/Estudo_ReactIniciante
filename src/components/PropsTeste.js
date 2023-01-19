import "./PropsTeste.module.css";

function PropsTeste({ nome, idade, genero }) {
  return (
    <>
      <li className="liTexto">{nome}</li>
      <li>{idade}</li>
      <li>{genero}</li>
    </>
  );
}

export default PropsTeste;
