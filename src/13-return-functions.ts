(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item
    });
    return total.toString()
  }

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);



  }

  printTotal([1, 2, 3, 4, 5])
})();

// En TypeScript podemos especificar el tipo de dato del valor que nos retornará una función o indicar si no se devolverá dato alguno:

// Retornos tipados en TypeScript
// El tipo de retorno se especificará después de los paréntesis en los que se encuentran los argumentos de la función:

// Void: funciones sin retorno
// Este tipo de función ejecuta ciertas instrucciones, pero no devuelve dato alguno. Estas son conocidas como funciones de tipo void. Se definen así:
// //TypeScript
// function imprimirNombre(yourName: string): void {
//     console.log(`Hello ${yourName}`);
// }
// Funciones con retorno
// Por el contrario, si en la función devolveremos algún valor, podemos especificar el tipo de dato de este:
// //TypeScript
// function suma(a: number, b: number): number {
//     return a + b;
// }

// function holaMundo(): string {
//     return "Hello, World!";
// }
// También los retornos pueden ser más de un tipo de dato:

// //TypeScript
// function devolverMayor(a: number, b: number): number | string {
//     if(a > b){
//         // Retorna un número
//         return a;
//     } else if( b > a ) {
//         // Retorna un número
//         return b;
//     } else {
//         // Retorna un string
//         return `Los números ${a} y ${b} son iguales`;
//     }
// }
// TypeScript también lo infiere
// Si no indicamos en nuestra declaración de la función el tipado del retorno, TypeScript, al igual que con las variables, lo puede inferir según si retornas datos (sea string, number, etc.) o si nada es devuelto (tipo void).
