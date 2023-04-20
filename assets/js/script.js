// Arreglo simple (1 Dimensión)
// var colaboradores = [
//     "Juan",
//     "Pedro",
//     "Francisco"
// ]


// var colaboradores = [
//     {
//         rut: "12.345.678-9",
//         nombre: "Juan Fica",
//         activo: true,
//         salario_hora: 5150.65,
//         horas_trabajadas: 38
//     },
//     {
//         rut: "23.345.558-9",
//         nombre: "Andrea Pérez",
//         activo: true,
//         salario_hora: 6150.85,
//         horas_trabajadas: 35
//     },
//     {
//         rut: "15.856.558-9",
//         nombre: "Francisco González",
//         activo: false,
//         salario_hora: 4850.85,
//         horas_trabajadas: 0
//     }
// ]

// for (let index = 0; index < colaboradores.length; index++) {
//     var colaborador = colaboradores[index];
//     console.log("Nombre:", colaborador.nombre, typeof colaborador.nombre);
//     console.log("Salario hora: ",colaborador["salario_hora"], typeof colaborador.salario_hora);
//     console.log("Activo: ", colaborador.activo, typeof colaborador.activo);
//     console.log("------------------------------------------")
// }
// console.log(colaboradores)


//Definición de un arreglo vacío.
var colaboradores = []


//QuerySelector la utilizamos para apuntar a un elemento con selectores iguales a los de CSS.
var inputRut = document.querySelector("#txt-rut")
var inputNombre = document.querySelector("#txt-nombre")
var inputSalarioHora = document.querySelector("#txt-salario-hora")
var inputHorasTrabajadas = document.querySelector("#txt-horas-trabajadas")
//getELementById la utilizamos para apuntar a un elemento con su ID.
var checkActivo = document.getElementById("check-activo")


// Definición de función con retorno para calcular salarios
function calcularSalario(salarioHora, horasTrabajadas) {
    var salario = salarioHora * horasTrabajadas
    return salario
}

//Definición de función para agregar un colaborador al arreglo.
function agregarColaborador(rut, nombre, salario, horas, activo) {
    //Función push incorpora un nuevo elemento al arreglo y lo ubica en la última posición
    colaboradores.push({
        rut: rut,
        nombre: nombre,
        salario_hora: salario,
        horas_trabajadas: horas,
        activo: activo,
        salario_neto: calcularSalario(salario, horas) //llamado de la función con retorno para cálculo de salarios
    })
    //Mostrar valor actual del arreglo de colaboradores (Lo muestra por consola del navegador)
    console.log(colaboradores)
}

// Captura del evento submit del formulario, con este evento podremos llamar a la función que agrega un nuevo colaborador al arreglo principal.
document.getElementById("formulario").addEventListener("submit", function(ev){
    // preventDefault() es una función que detiene el envío de datos del formulario (Evento submit)
    ev.preventDefault();
    // Invocar función que agrega un colaborador al arreglo
    agregarColaborador(inputRut.value, inputNombre.value, inputSalarioHora.value, inputHorasTrabajadas.value, checkActivo.checked)

    // Líneas para borrar los valores de los input del formulario
    inputRut.value = ""
    inputNombre.value = ""
    inputSalarioHora.value = ""
    inputHorasTrabajadas.value = ""
    checkActivo.checked = false
})