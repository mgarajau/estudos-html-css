function frutasExoticas(frutas) {
    const frutasExoticas = 'kiwi, melao, abacaxi, mirtilo'; 
    let contador = 0;
    for (let i = 0; i < frutas.length; i++) {
        if (frutasExoticas.includes(frutas[i])) { 
            contador++; 
        }
    }
    return contador; 
}

console.log(frutasExoticas(['banana', 'abacaxi', 'manga', 'kiwi'])); 
console.log(frutasExoticas(['maçã', 'pera', 'uva'])); 
console.log(frutasExoticas(['mirtilo', 'melao', 'abacaxi', 'laranja'])); 