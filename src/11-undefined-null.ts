(()=>{
//let myNumber: number;
//let myString: string;
let myNull: null = null;
let myUndefined: undefined = undefined;

let myNumber: number | null = null;
myNumber = 14;
myNumber= null;

let myString: string | undefined = undefined;
myString = 'patata';

function hi(name: string | null){
  let hello = 'Hola ';
  if(name){
    hello += name;
  }else{
    hello += 'nadie'
  }
  console.log(hello);

}

function hiV2(name: string | undefined){
  let hello = 'Hola ';
  hello += name?.toLowerCase() || 'nadie';
  console.log(hello);

}
hi('Nicolas');
hi(null);

hiV2('Nicolas');
hiV2(undefined);

})();

// Estos dos funcionan como dos tipos de datos, al igual que, por ejemplo, string o number.

// El tipo de datonull es para indicar un valor nulo y undefined para algo indefinido. Son tipos diferentes.

// Null y Undefined como tipo Any
// En TypeScript, si no especificamos que va a ser null o undefined, estos son inferidos como tipo any:

// //TypeScript
// let myVar = null; //Tipo any
// let otherVar = undefined; //Tipo any

// let myNull: null = null; // Tipo null
// let myUndefined: undefined = undefined; //Tipo undefined
// Union Types como emergencia
// Hay casos en la que queremos que una variable sea de tipo string o number y que al inicializarlas sean de tipo null o undefined para luego asignarles un valor del tipo de dato de los primeros mencionados. En este contexto podríamos usar los Union Types:

// let myNumber: number | null = null;
// myNumber = 50;

// let myString: string | undefined = undefined;
// myString = "Hola TypeScript";
