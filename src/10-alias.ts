(()=>{
  type UserID =  string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XS';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
  shirtSize = 'XL';
  shirtSize= 'XS';

  function greeting(userId: UserID, size: Sizes){
    if(typeof userId === 'string'){
      console.log(`ID: ${userId.toLowerCase()}`);
      console.log(`Tamaño: ${size.toLowerCase()}`);
    }
  }

  greeting(161646, 'XL');
  greeting('161646', 'XL');
})();

// Los Alias nos permiten darle un nombre a uno o varios tipos de datos en conjunto. Un ejemplo de como se definen sería así:

// type UserID = string | boolean | number;
// ¡Ahora UserID lo podemos usar como si fuese un tipo de dato string, boolean o number!

// let dynamicVar: UserID = "300";

// dynamicVar = true;
// dynamicVar = 200;
// Los Union Types que vayamos a utilizar ahora serán menos tediosos de escribir, pues con los Alias podemos utilizar el mismo conjunto de tipos de datos en la definición de varias variables, beneficiándonos en escribir menos código.

// type UserID = string | boolean | number;

// let dynamicVar: UserID = "300";

// function helloUser( userId: UserID ) {
//     console.log(`Un saludo al usuario con el número de id ${userId}`);
// }
// Nota: la palabra type en los Alias es algo propio de TypeScript.

// Tipos Literales (Literal Types)
// Gracias a esto podemos definir explícita y literalmente los posibles valores que puede tomar nuestra variable. Por ejemplo:

// let shirtSize: "S" | "M" | "L" | "XL";

// shirtSize = "M"; //CORRECTO
// shirtSize = "S"; //CORRECTO
// shirtSize = "qwrty"; //ERROR. No está en las opciones.
// shirtSize = "SS"; //ERROR. Letra de más.
// shirtSize = "m"; //ERROR. Está en minúscula.
// Definimos que la variable shirtSize pueda ser una de las 4 posibles opciones de valores, que estos sean de tipo string y que estén en mayúscula, por tanto, si queremos asignar un valor que no sea exactamente como lo declaramos, TypeScript nos mostrará un error.

// Alias + Tipos Literales
// También podríamos combinarlas para facilitar aún más el desarrollo de nuestro programa:

// type Sizes = 'S' | 'M' | 'L' | 'XL';

// let shirtSize: Sizes;
// shirtSize = "M";

// function yourSize( userSize: Sizes ){
//     console.log(`Tu medida es ${userSize}`);
// }
