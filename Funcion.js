// ETIQUETA FORM

const formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  document.getElementById("mensaje").textContent =
    "Hola " + nombre + ", formulario enviado correctamente";
});

//FIN ETIQUETA FORM

// ETIQUETA LABEL
function mostrarEdad() {
  const edad = document.getElementById("edad").value;
  document.getElementById("resultado").textContent =
    "Tu edad es: " + edad;
}

// FIN ETIQUETA LABEL

// ETIQUETA INPUT
function NuevaContraseña() {
  const clave = document.getElementById("clave").value;
  document.getElementById("resultadoClave").textContent = 
  "Se cambió la contraseña exitosamente: " + clave;
}
// FIN ETIQUETA INPUT

//TIPOS DE INPUT

// CODIGO JS DE LOS TIPOS DE INPUT 
//	text
//	email
//	password
//	number
//	date
//	radio
//	checkbox
//	file
//	submit

// FIN TIPOS DE INPUT

// ETIQUETA TEXTAREA
 function mostrarTexto() {
    let contenido = document.getElementById("texto").value;
    document.getElementById("mostrarTexto").textContent = 
  "Texto ingresado: " + contenido;
}
// FIN ETIQUETA TEXTAREA

// ETIQUETA SELECT
function mostrarSeleccion() {
    const valor = document.getElementById("opciones").value;
    document.getElementById("mostrarSeleccion").textContent = 
    "Elegiste: " + valor;
}
// FIN ETIQUETA SELECT

// ETIQUETA OPTION
function mostrarSeleccionColor() {
    const color = document.getElementById("colores").value;
    document.getElementById("mostrarSeleccionColor").textContent = 
    "Elegiste el color: " + color;
}
// FIN ETIQUETA OPTION
// BUTTON
function saludar() {
    document.getElementById("mensajeSaludo").textContent = "Hola 👋";
}
// FIN BUTTON
// ETIQUETA FIELDSET
function mostrarDatos() {
    let nombre = document.getElementById("Nombre").value;
    let edad = document.getElementById("Edad").value;
        document.getElementById("resultadoDatos").textContent =
            "Nombre: " + nombre + 
            "| Edad: " + edad 
            
}
// FIN ETIQUETA FIELDSET
// ETIQUETA LEGEND
function cambiarTitulo() {
    document.getElementById("titulo").textContent = "Datos Registrados";
}
// FIN ETIQUETA LEGEND
