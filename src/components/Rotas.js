export default function Rotas({ rota, busca }) {
  switch (rota) {
    case 1:
      rota = `https://ranekapi.origamid.dev/json/api/produto/${busca}`;
      break;

    case 2:
      rota = `https://exchange.kahsh.com/api/login/`;
      break;

    case 3:
      rota = `https://exchange.kahsh.com/api/fastbuy`;
      break;

    default:
      rota = `https://ranekapi.origamid.dev/json/api/transacao/`;
      break;
  }

  return rota;
}
