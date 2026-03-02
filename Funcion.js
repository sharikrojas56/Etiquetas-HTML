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

//texto


function mostrarMascota() {
    const mascota = document.getElementById("mascota").value.trim();
    const resultado = document.getElementById("resultadoMascota");

    if (mascota.length === 0) {
        resultado.textContent = "Por favor escribe el nombre de tu mascota.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Tu mascota se llama: " + mascota;
        resultado.style.color = "green";
    }
}

//email

function mostrarCorreo() {
    const correo = document.getElementById("correo").value.trim();
    const resultado = document.getElementById("resultadoCorreo");

    if (correo.length === 0) {
        resultado.textContent = "Por favor escribe tu correo.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Tu correo es: " + correo;
        resultado.style.color = "green";
    }
}


//password

function mostrarPassword() {
    const password = document.getElementById("password").value.trim();
    const resultado = document.getElementById("resultadoPassword");

    if (password.length === 0) {
        resultado.textContent = "Por favor ingresa una contraseña.";
        resultado.style.color = "red";
    } else if (password.length < 6) {
        resultado.textContent = "La contraseña debe tener al menos 6 caracteres.";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = `Contraseña válida ✅ (Longitud: ${password.length} caracteres)`;
        resultado.style.color = "green";
    }
}

//number
function mostrarEdad() {
    const input = document.getElementById("edad").value;
    const resultado = document.getElementById("resultadoEdad");

    if (input === "" || input === null) {
        resultado.textContent = "Por favor ingresa tu edad.";
        resultado.style.color = "red";
        return;
    }

    const edad = parseInt(input, 10);

    if (isNaN(edad) || edad < 1 || edad > 120) {
        resultado.textContent = "Ingresa una edad válida entre 1 y 120.";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = `Tu edad es: ${edad} años ✅`;
        resultado.style.color = "green";
    }
}

//date

function mostrarFecha() {
    const fecha = document.getElementById("fecha").value;
    const resultado = document.getElementById("resultadoFecha");

    if (!fecha) {
        resultado.textContent = "Por favor selecciona una fecha.";
        resultado.style.color = "red";
    } else {
        // Separar año, mes y día
        const [anio, mes, dia] = fecha.split("-");
        resultado.textContent = `La fecha seleccionada es: ${dia}/${mes}/${anio} ✅`;
        resultado.style.color = "green";
    }
}

//radio

function mostrarGenero() {
    const generoSeleccionado = document.querySelector('input[name="genero"]:checked');
    const resultado = document.getElementById("resultadoGenero");

    if (!generoSeleccionado) {
        resultado.textContent = "Por favor selecciona un género.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = `Has seleccionado: ${generoSeleccionado.value} ✅`;
        resultado.style.color = "green";
    }
}

//checkbox

function mostrarHobbies() {
    const checkboxes = document.querySelectorAll('input[name="hobby"]:checked');
    const resultado = document.getElementById("resultadoHobbies");

    if (checkboxes.length === 0) {
        resultado.textContent = "Por favor selecciona al menos un hobby.";
        resultado.style.color = "red";
    } else {
        const seleccion = Array.from(checkboxes).map(cb => cb.value).join(", ");
        resultado.textContent = `Has seleccionado: ${seleccion} ✅`;
        resultado.style.color = "green";
    }
}

//file

function mostrarArchivo() {
    const input = document.getElementById("archivo");
    const resultado = document.getElementById("resultadoArchivo");

    if (!input.files || input.files.length === 0) {
        resultado.textContent = "Por favor selecciona un archivo.";
        resultado.style.color = "red";
    } else {
        const nombreArchivo = input.files[0].name;
        resultado.textContent = `Archivo seleccionado: ${nombreArchivo} ✅`;
        resultado.style.color = "green";
    }
}


//submit

document.getElementById("formArchivo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const input = document.getElementById("miArchivo");
    const mensaje = document.getElementById("mensajeArchivo");
    const vista = document.getElementById("vistaPrevia");

    if (!input.files || input.files.length === 0) {
        mensaje.textContent = "Por favor selecciona un archivo.";
        mensaje.style.color = "red";
        vista.style.display = "none";
    } else {
        const archivo = input.files[0];
        mensaje.textContent = `Archivo seleccionado: ${archivo.name} ✅`;
        mensaje.style.color = "green";

        // Mostrar vista previa
        if (archivo.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function(e) {
                vista.src = e.target.result;
                vista.style.display = "block";
            }
            reader.readAsDataURL(archivo);
        } else {
            vista.style.display = "none";
        }
    }
});

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
