const Contactos = () =>{
    return(
        <div>
            <h1>Contactos</h1>
            <form action="">
                <input placeholder="tumail@mail.com" type="email" name="email" id="email" />
                <input placeholder="Nombre" type="text" name="nombre" id="nombre" />
                <input placeholder="Contraseña" type="password" name="contraseña" id="contraseña" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Contactos;