// console.log('Funciona correctamente')

// querySelector: retorna ninguno o hasta un elemento que concuerde con selecctor que estoy escribiendo. La selección es tal y como en CSS, '.clase', #id.

// const heading = document.querySelector('.header__texto h2') // Retorna de 0 a 1 elementos.
// // heading.textContent = 'HOLA' // para cambiar el heading
// console.log(heading);


// // querySelectorAll

// const enlaces = document.querySelectorAll('.navegacion a');
// // enlaces[0].textContent = 'NUEVO ENLACE JS'; cambiar nombre del enlace
// // enlaces[0].href = 'https://github.com/'; cambiar enlace
// enlaces[0].classList.add('nueva-clase');
// // enlaces[0].classList.remove('navegacion__enlace');
// console.log(enlaces);

// // getElementByID
// // const heading2 = document.getElementById('heading')
// // console.log('heading2');
// // heading2.textContent = 'ALV'

// // Generar nuevo enlace
// const nuevoEnlace = document.createElement('A');
// nuevoEnlace.textContent = 'Click aquí';
// nuevoEnlace.href = 'https//:petardas.com';
// nuevoEnlace.classList.add('navegacion__enlace');


// const navegacion = document.querySelector('.navegacion'); // Se abre esta variable para seleccionar el lugar dentro del HTML.
// navegacion.appendChild(nuevoEnlace); // Una vez que se tiene el lugar seleccionado, se añade este método para que sea asignado el nuevoEnlace al lugar identificado en el HTML como navegacion.


// console.log(nuevoEnlace);

// console.log(1);

// // window.addEventListener('load', function() { // load espera a que el JS y los archivos que dependen del HTML estén listos. ¡¡¡LA FUNCIÓN AQUÍ ES UN CALLBACK!!!
// //     console.log(2)
// // })

// window.addEventListener('load', imprimir);

// window.onload = function() { // sería lo mismo que el anterior pero escrito en forma de función
//     console.log(3);
// }

// // Load espera a que se descargue HTML, Imágenes, CSS, JSS, todo lo que se tenga en el Window

// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// });

// // DOMContentLoaded solo espera a que se descargue el HTML, usualmente se va a usar este en lugar del Load con window que porque no necesitamos esperar a cargar CSS porque no vamos a modificar hojas de estilo con JS, solo necesitamos que se cargue el HTML.

// console.log(5)

// function imprimir() {
//     console.log(2);
// }

// window.onscroll= function() {
//     console.log('scrolling...');
// }

// Seleccionar elementos y asociarles un evento

// --------- EVENTO CLICK: se les asocia a cualquier evento que no sea formulario.

// const botonEnviar = document.querySelector('.boton--primario')
// botonEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     console.log(evento.isTrusted);
//     evento.preventDefault(); // previene la acción por Default, si das click a un enlace, no te lleva al enlace. Si das click en Submit no envía ni recarga. ESPECIALMENTE UTIL PARA FORMULARIOS.
//     console.log('enviando formulario...');
// });


// -------- Eventos de los inputs y textarea

// PARA NO HACER ESTO: 

// const nombreForm = document.querySelector('#nombre')
// const emailForm = document.querySelector('#email')
// const mensajeForm = document.querySelector('#mensaje')

// nombreForm.addEventListener('input', function(event) {
    //     console.log(event.target.value)
    // })
    // emailForm.addEventListener('input', function(event) {
        //     console.log(event.target.value)
        // })
        // mensajeForm.addEventListener('input', function(event) {
            //     console.log(event.target.value)
            // })
            
// SE HACE ESTO:

const datos = {
nombre: '',
email: '',
mensaje: ''
} // es importante que las propiedades del objeto coincidan con el id, pero yo los puse sin las propiedades del objeto y de todos modos funcionó

const nombreForm = document.querySelector('#nombre')
const emailForm = document.querySelector('#email')
const mensajeForm = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario');

nombreForm.addEventListener('input', leerTexto);
emailForm.addEventListener('input', leerTexto);
mensajeForm.addEventListener('input', leerTexto);

// -------- EVENTO SUBMIT: se asocia con el formulario específicamente.

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    // Validar formulario
const { nombre, email, mensaje } = datos;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('alguno o todos los campos están vacíos', true); // el segundo argumento se asocia con el argumento error de la función.
        return; // Corta la ejecución del código, por ello no tiene sentido el else
        }

    // Enviar formulario

    console.log('Enviando formulario...')
    mostrarAlerta('Los datos se enviaron de forma exitosa', false)
})

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error) {
        alerta.classList.add('error');
        console.log(error)
    } else {
        alerta.classList.add('success');
        console.log(mensaje)
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}




// function leerTexto(evento) {
//     console.log(evento.target.value);
// }

// donde datos[evento.target.id] va a usar la asociación primero de evento para funcionar e imprimir mientras se escriba. 


// "nombreForm.addEventListener('change', function()" podría usar 'change' pero no me da una validación en tiempo real, es mejor 'input'


// const { nombre, email, mensaje } = datos;
//     if (nombre === '' || email === '' || mensaje === '') {
//         mostrarError('alguno o todos los campos están vacíos', error);

//         return; // Corta la ejecución del código, por ello no tiene sentido el else
//     }
//     // Enviar formulario
    
//     console.log('Enviando formulario...')
//     sendSuccess('Los datos se enviaron de forma exitosa')
// })

// function leerTexto(evento) {
//     datos[evento.target.id] = evento.target.value;
//     console.log(datos);
// }

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
//     console.log(error);

//     formulario.appendChild(error);

//     setTimeout(() => {
//         error.remove();
//     }, 3000);
// }

// function sendSuccess(mensaje) {
//     const success = document.createElement('P')
//     success.textContent = mensaje;
//     success.classList.add('success')
//     console.log('success')
//     formulario.appendChild(success)

//     setTimeout(() => {
//         success.remove();
//     }, 3000);
// }