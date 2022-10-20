const ContadorItems = ({
  stock,
  setItemsCantidad,
  setStockActual,
  itemsCantidad,
  stockActual,
}) => {
  return (
    <div className="contenedor-contador-items">
      <h3>Hay {stockActual} en stock de este producto.</h3>
      <div className="contador-items">
        <i
          onClick={() => {
            if (itemsCantidad === 0) {
              return;
            } else {
              setItemsCantidad((itemsCantidad) => itemsCantidad - 1);
              setStockActual((stockActual) => stockActual + 1);
            }
          }}
          className="bx bx-minus"
        ></i>
        <div>{itemsCantidad}</div>
        <i
          onClick={() => {
            if (itemsCantidad === stock) {
              return;
            } else {
              setItemsCantidad((itemsCantidad) => itemsCantidad + 1);
              setStockActual((stockActual) => stockActual - 1);
            }
          }}
          className="bx bx-plus"
        ></i>
      </div>
    </div>
  );
};

export default ContadorItems;
