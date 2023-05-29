let miNombre= "Valentin";
let miApellido="Dorigo";
let miEdad= 23;
let miMascota="Evita";
let edadMascota= 7;
console.log( `${miNombre} ${miApellido} ${miEdad} ${miMascota} ${edadMascota}`)

let nombreCompleto= miNombre + miApellido
let textoPresentacion=`Me llamo ${nombreCompleto} tengo ${miEdad} años y mi mascota se llama ${miMascota} y tiene ${edadMascota}`
console.log(textoPresentacion);
let sumaEdades= miEdad + edadMascota;
console.log(sumaEdades)
let restaEdades= miEdad - edadMascota;
console.log(restaEdades)
let multiplicacionEdades= miEdad * edadMascota;
console.log(multiplicacionEdades)
let divisionEdades= miEdad / edadMascota;
console.log(divisionEdades)

textoPresentacion=`Me llamo ${nombreCompleto} tengo ${miEdad} años y mi mascota se llama ${miMascota} y tiene ${edadMascota}${sumaEdades} ${restaEdades} ${multiplicacionEdades}${divisionEdades}`

let alumno= {
    nombre:'Valentin',
    pelo: 'Castaño',
    edad: 23,
    pais: 'Argentina',
    gustos: 'Futbol'
};
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.pelo)
console.log(alumno.edad)
console.log(alumno.pais)
console.log(alumno.gustos)

let mascota={
    nombre:'Evita',
    pelo:'plateado',
    edad: 7,
    pais: 'Argentina',
    gustos: 'Correr en campos'
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.pelo)
console.log(mascota.edad)
console.log(mascota.pais)
console.log(mascota.gustos)

let frutas = ['manzana', 'naranja', 'banana', 'mandarina', 'pera']
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros= [1,2,3,4,5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia=['Juan','Roberto','Susana','Anastasia','Maria']
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

let textoAleatorio=  familia[4]+ " se compro " + numeros[3] +" "+ frutas[1] +"s" 
console.log(textoAleatorio)


let edad = (prompt('Ingrese su edad:'))
let altura = (prompt('Ingrese su altura en centímetros:'))
let puedeSubir = edad > 6 && altura >= 120
if ( edad > 6 && altura >= 120) {
    console.log('Puede subir a la atracción tiene ' + edad + ' años '+' mide ' + altura + 'cm')
} else {
    console.log('No puede subir')
}

let tipoPase = prompt('Ingrese el tipo de pase (Vip, Normal, o Limitado):')
let saldo = prompt('Ingrese el saldo disponible:')
if (tipoPase = 'Vip' || saldo > 1000) {
    console.log('Puede pasar al Vip')
} else {
    console.log('No puede pasar al Vip')
}