function crearContador(){
    let count =0
    return function (){
        count++
        return count
    }
    
}

const contar = crearContador()
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());