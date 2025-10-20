(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const BTN_ID = "verOfertasBtn";
    const LISTA_ID = "lista-ofertas";
    const SECCION_OFERTAS_ID = "ofertas";

    const btn = document.getElementById(BTN_ID) || document.querySelector("#" + BTN_ID);
    const contenedor = document.getElementById(LISTA_ID);
    const seccionOfertas = document.getElementById(SECCION_OFERTAS_ID);
   
    if (!btn) {
      console.error(`Botón con id="${BTN_ID}" no encontrado en el DOM.`);
    }
    if (!contenedor) {
      console.error(`Contenedor con id="${LISTA_ID}" no encontrado en el DOM.`);
    }
    if (!seccionOfertas) {
      console.error(`Sección con id="${SECCION_OFERTAS_ID}" no encontrada en el DOM.`);
    }

    function mostrarOfertas() {
      if (!contenedor) return; 
      const ofertas = [
        "🥦 20% de descuento en frutas y verduras frescas.",
        "🥛 2x1 en productos Dos Pinos.",
        "🥩 15% de descuento en carnes nacionales.",
        "🍞 Panadería: compre 2 y lleve 1 gratis."
      ];

      contenedor.innerHTML = "";
      ofertas.forEach(texto => {
        const div = document.createElement("div");
        div.className = "oferta";
        div.textContent = texto;
        contenedor.appendChild(div);
      });

      if (seccionOfertas && seccionOfertas.scrollIntoView) {
        seccionOfertas.scrollIntoView({ behavior: "smooth" });
      } else {

        contenedor.focus && contenedor.focus();
      }
    }

    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarOfertas();
      });

      btn.onclick = btn.onclick || function (e) {
        e && e.preventDefault();
        mostrarOfertas();
      };
    }

    const form = document.getElementById("form-contacto");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre") ? document.getElementById("nombre").value : "amigo";
        const confirmacion = document.getElementById("mensaje-confirmacion");
        if (confirmacion) {
          confirmacion.textContent = `¡Gracias, ${nombre}! Tu mensaje fue enviado correctamente.`;
          confirmacion.style.color = "#16a085";
        }
        form.reset();
      });
    }
  });
})();
