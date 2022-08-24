    let cruzOpciones = document.querySelector(".cerrar-opciones")
    let cruzCarrito = document.querySelector(".cerrar-carrito")
    let carrito = document.querySelector(".carrito")
    let opciones = document.querySelector(".opciones")
    let carritoIcono = document.querySelector(".bxs-shopping-bag")
    let menuIcono = document.querySelector(".bx-menu")
    
    cruzCarrito.addEventListener("click", () => {
      carrito.classList.add("desactivar-carrito")
    })
    cruzOpciones.addEventListener("click", () => {
      opciones.classList.add("desactivar-opciones")
    })
    carritoIcono.addEventListener("click",()=>{
      carrito.classList.remove("desactivar-carrito")
    })
    menuIcono.addEventListener("click",()=>{
      opciones.classList.remove("desactivar-opciones")
    })
    

