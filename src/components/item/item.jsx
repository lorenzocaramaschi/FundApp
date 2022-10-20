const Item = ({ titulo, precio, imagen }) => {
  return (
    <div className="contenedor-item">
      <div className="imagen-item">
        <img width={"70%"} height={"70%"} src={imagen} alt={titulo} />
      </div>

      <div className="pie-item">
        <h3 className="titulo-item">{titulo}</h3>
        <span className="precio-item">${precio}</span>
      </div>
    </div>
  );
};

export default Item;
