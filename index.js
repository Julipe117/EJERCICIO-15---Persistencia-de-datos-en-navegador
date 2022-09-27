const nombre = "Sergio";
const apellido = "de Luque";
const nombreCompleto = {
    nombre, apellido
}

console.log(nombreCompleto);

// sessionStorage.setItem("nombre-Completo", JSON.stringify(nombreCompleto));

// localStorage.setItem("nombre-Completo", JSON.stringify(nombreCompleto));

//// document.cookie = "nombreCaducidad=nombre-Completo; expires=" + new Date(Date.now() + 120000).toUTCString()

const now = new Date()
// document.cookie = `nombre-Completo=${JSON.stringify(nombreCompleto)};expires=${new Date(now.getTime() + 2 * 60000)}`
