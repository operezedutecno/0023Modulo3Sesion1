// Arreglo simple (1 Dimensión)
// var colaboradores = [
//     "Juan",
//     "Pedro",
//     "Francisco"
// ]


var colaboradores = [
    {
        rut: "12.345.678-9",
        nombre: "Juan Fica",
        activo: true,
        salario_hora: 5150.65,
        horas_trabajadas: 38
    },
    {
        rut: "23.345.558-9",
        nombre: "Andrea Pérez",
        activo: true,
        salario_hora: 6150.85,
        horas_trabajadas: 35
    },
    {
        rut: "15.856.558-9",
        nombre: "Francisco González",
        activo: false,
        salario_hora: 4850.85,
        horas_trabajadas: 0
    }
]

for (let index = 0; index < colaboradores.length; index++) {
    var colaborador = colaboradores[index];
    console.log("Nombre:", colaborador.nombre, typeof colaborador.nombre);
    console.log("Salario hora: ",colaborador["salario_hora"], typeof colaborador.salario_hora);
    console.log("Activo: ", colaborador.activo, typeof colaborador.activo);
    console.log("------------------------------------------")
}




// console.log(colaboradores)