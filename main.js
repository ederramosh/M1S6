const nombres = ['alberto', 'paty', 'Jose', 'daniel', 'luis', 'antonio', 'Luis', 'paty', 'luis'];

/*-------- Primero Ejercicio --------*/

function mayusculas(nombres) {
    nombres.forEach( elemento => {
        console.log(elemento.toUpperCase());
    });
}

mayusculas(nombres);

/*-------- Segundo Ejercicio --------*/

function tamanio(nombres){
    let tamanioCadena = nombres.map( elemento => {
        return elemento.length;
    });
    return tamanioCadena;
}

console.log(tamanio(nombres));


/*-------- Tercero Ejercicio --------*/

function misNombres(name) {
    let filtroNombres = nombres.filter( elemento => {
        return elemento == name;
    });
    
    return filtroNombres;
}

console.log(misNombres('luis'));