let conjunto = [
    {nombre: "Diego", Nota1: 18, Nota2: 17, Nota3: 16, Nota4: 7, Nota5: 14},
    {nombre: "Martin", Nota1: 1, Nota2: 2, Nota3: 3, Nota4: 7, Nota5: 4},
    {nombre: "Paula", Nota1: 18, Nota2: 17, Nota3: 16, Nota4: 7, Nota5: 15},
    {nombre: "Andrea", Nota1: 18, Nota2: 17, Nota3: 16, Nota4: 7, Nota5: 12},
    {nombre: "Natalia", Nota1: 18, Nota2: 17, Nota3: 16, Nota4: 17, Nota5: 19},
];

// Calcular el promedio de cada estudiante
for (let i = 0; i < conjunto.length; i++) {
    conjunto[i].Nota = (
        conjunto[i].Nota1 +
        conjunto[i].Nota2 +
        conjunto[i].Nota3 +
        conjunto[i].Nota4 +
        conjunto[i].Nota5
    ) / 5;
}

// Clasificación de los estudiantes
for (let i = 0; i < conjunto.length; i++) {
    if (conjunto[i].Nota >= 16) {
        conjunto[i].Clasificacion = "Excelente";
    } else if (conjunto[i].Nota >= 12) {
        conjunto[i].Clasificacion = "Bueno";
    } else if (conjunto[i].Nota >= 8) {
        conjunto[i].Clasificacion = "Aprobado";
    } else {
        conjunto[i].Clasificacion = "Reprobado";
    }
}

// Mostrar los datos de cada estudiante
for (let i = 0; i < conjunto.length; i++) {
    // Calcular máximo y mínimo de manera manual
    let notas = [conjunto[i].Nota1, conjunto[i].Nota2, conjunto[i].Nota3, conjunto[i].Nota4, conjunto[i].Nota5];
    let maximo = notas[0];
    let minimo = notas[0];

    for (let j = 1; j < notas.length; j++) {
        if (notas[j] > maximo) maximo = notas[j];
        if (notas[j] < minimo) minimo = notas[j];
    }

    console.log("Nombre:", conjunto[i].nombre);
    console.log("Notas:", conjunto[i].Nota1, conjunto[i].Nota2, conjunto[i].Nota3, conjunto[i].Nota4, conjunto[i].Nota5);
    console.log("El promedio es:", conjunto[i].Nota);
    console.log("La calificación más alta es:", maximo);
    console.log("La calificación más baja es:", minimo);
    console.log("Clasificación:", conjunto[i].Clasificacion);
    console.log("-------------------------------");
}

// Encontrar el mejor y peor promedio
let mejorPromedio = conjunto[0].Nota;
let peorPromedio = conjunto[0].Nota;
let estudianteMejor = conjunto[0].nombre;
let estudiantePeor = conjunto[0].nombre;

for (let i = 1; i < conjunto.length; i++) {
    if (conjunto[i].Nota > mejorPromedio) {
        mejorPromedio = conjunto[i].Nota;
        estudianteMejor = conjunto[i].nombre;
    }
    if (conjunto[i].Nota < peorPromedio) {
        peorPromedio = conjunto[i].Nota;
        estudiantePeor = conjunto[i].nombre;
    }
}

console.log("El estudiante con el mejor promedio es:", estudianteMejor, "con un promedio de", mejorPromedio);
console.log("El estudiante con el peor promedio es:", estudiantePeor, "con un promedio de", peorPromedio );