import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="indice-redes">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lorenzo-caramaschi-desarrollador-fullstack/"
        >
          <li>
            <i className="bx bxl-linkedin"></i>
          </li>
        </a>{" "}
        <a target="_blank" href="https://github.com/lorenzocaramaschi">
          <li>
            <i className="bx bxl-github"></i>
          </li>
        </a>{" "}
        <a target="_blank" href="https://www.instagram.com/lolo.caramaschi/">
          <li>
            <i className="bx bxl-instagram"></i>
          </li>
        </a>
      </ul>
      <p>Todos los derechos reservados.</p>
      <p>Lorenzo Caramaschi ©</p>
    </footer>
  );
};

export default Footer;
