(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XS';


  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return{
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);



})();


// Las funciones son nativas de JavaScript y esencialmente funcionan igual en TypeScript. Sin embargo, este último, con su sistema de tipado, nos ayudará a llevar a cabo una implementación más segura:

// Podemos definir que los argumentos de la función tengan un determinado tipo de dato (o más de uno si se usa Union Types):
// type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

// function createProductJson(
//     title: string,
//     createdAt: Date,
//     stock: number,
//     size: Sizes
// ){
//    return {
//         title,
//         createdAt,
//         stock,
//         size
//     }
// }
// En el argumento createdAt se indica que es de tipo Date en alusión al objeto Date propio de JavaScript y no a un tipo de dato como string o number. Son diferentes las definiciones.

// Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos los parámetros en orden y con el tipo de dato que se declaró en la función:
// const producto1 = createProductJson(
//     "titulo",
//     new Date('10/10/3030'),
//     30,
//     'M'
// )
// Ejemplo de una función en TypeScript
// En Visual Studio Code, si dejas el cursor sobre el nombre de la función que vas a invocar, te mostrará un mensaje con los detalles de la función, lo que espera como parámetros y lo que devolverá indicando además el orden y el tipo de dato de cada variable.

// Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:
// type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

// function createProductJson(
//     title: string,
//     createdAt: Date,
//     stock?: number,
//     size?: Sizes
// ){
//     /*Código de la función*/
// }
// Nota: cuando definamos argumentos opcionales en una función, estas deben ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber confusiones al momento de invocar la función y enviar los respectivos parámetros:

// function randomFunc(title: string, amount?: number){} //CORRECTO

// function otherFunc(title?: string, amount: number){} // ERROR
