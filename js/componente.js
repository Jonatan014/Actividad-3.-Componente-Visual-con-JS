function mostrarToast(mensaje, tipo) {
    let contenedor = document.getElementById("contenedorToast");

    if (!contenedor) {
        contenedor = document.createElement("div");
        contenedor.id = "contenedorToast";
        document.body.appendChild(contenedor);
    }

    let toast = document.createElement("div");
    toast.className = "toast " + tipo;
    let icono = "";

    switch (tipo) {
        case "success":
            icono = "✅";
            break;
        case "error":
            icono = "❌";
            break;
        case "warning":
            icono = "⚠️";
            break;
        default:
            icono = "ℹ️";
            break;
    }

    toast.innerHTML = `
        <span class="icono">${icono}</span>
        <span>${mensaje}</span>
    `;

    contenedor.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("mostrar");
    }, 100);

    setTimeout(() => {
        toast.classList.remove("mostrar");

        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 3000);
}