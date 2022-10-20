import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartProvider";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  useEffect(() => {}, [cart]);

  return (
    <Link className="cart-widget-ii" to={"/carrito"}>
      <i className="cart-widget bx bxs-shopping-bag"></i>
      <p className="contador-carro">{cart.length}</p>
    </Link>
  );
};

export default CartWidget;
