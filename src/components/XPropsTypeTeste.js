import PropTypes from 'prop-types'


function XPropsTypeTeste({ nome, marca, ano }) {
  return (
    <>
      <li>{nome}</li>
      <li>{ano}</li>
      <li>{marca}</li>
    </>
  );
}

XPropsTypeTeste.propTypes = {
  nome: PropTypes.string.isRequired,
  ano: PropTypes.number.isRequired,
  marca: PropTypes.oneOf([true, false, 0, 'Unknown']).isRequired
};

XPropsTypeTeste.defaultProps = {
    nome: "Digite o nome por favor",
    marca: "Digite o nome por favor",
  };
export default XPropsTypeTeste;
