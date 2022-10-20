import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";

const Contactos = () => {
  const [consulta, setConsulta] = useState({
    consultas: {
      nombre: "",
      mensaje: "",
      email: "",
    },
  });

  const db = getFirestore();

  const createConsulta = () => {
    const query = collection(db, "mensajes");
    addDoc(query, consulta)
      .then(({ id }) => {
        console.log(id);
        Swal.fire({
          title: "Mensaje enviado!",
          icon: "success",
          confirmButtonText: "¡Pronto te contestaremos!",
        });
      })
      .catch((err) =>
        Swal.fire({
          title: "¡Hubo un error en tu compra!",
          text: "Tu consulta no pudo ser enviada",
          icon: "error",
          confirmButtonText: "Ok",
        })
      );
  };

  const HandleInputChange = (e) => {
    console.log(e.target);
    setConsulta({
      ...consulta,
      consultas: {
        ...consulta.consultas,
        [e.target.name]: e.target.value,
      },
    });
    console.log(consulta);
  };

  return (
    <div>
      <h1 className="h1-contactos">¡Contactanos!</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="formulario-orden ancho-contactos-formulario"
        action="post"
      >
        <h3 className="subrayado">FundApp</h3>
        <h4>Deja tu consulta</h4>
        <div>
          <i className="bx bxs-user"></i>
          <input
            value={consulta.consultas.nombre}
            onChange={HandleInputChange}
            placeholder="Nombre y apellido"
            type="text"
            name="nombre"
            id="nombre"
          />
        </div>
        <div>
          <i className="bx bx-envelope"></i>
          <input
            value={consulta.consultas.email}
            required
            onChange={HandleInputChange}
            placeholder="E-mail"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <i className="bx bx-chat"></i>
          <textarea
            value={consulta.consultas.mensaje}
            onChange={HandleInputChange}
            placeholder="Tu mensaje!"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button className="boton-enviar" type="submit" onClick={createConsulta}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contactos;
