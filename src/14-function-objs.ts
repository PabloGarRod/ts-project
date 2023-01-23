(()=>{
  const login = (data:{email: string, password: number})=>{
    console.log(`
    email: ${data.email}
    password: ${data.password}
    `)
  };

  login({
    email: 'patata@zanahoria',
    password: 827548278
  });

  type Sizes = 'S'|'M'|'L'|'XL';

  const products: any[] = [];

  const addProducts = (data:{
    tittle: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  })=>{
    products.push(data);
  };

  addProducts({
    tittle: 'patata',
    createdAt: new Date(1993/1/1),
    stock: 670,
   // size: 'L'
  })

  addProducts({
    tittle: 'patata',
    createdAt: new Date(1943/12/25),
    stock: 430,
   size: 'L'
  })

  console.log(products)

})();


// Nuestras funciones pueden recibir objetos como argumentos. En TypeScript también podemos declarar el tipado de estos. Veamos un ejemplo:

// //TypeScript
// function imprimirDatos( data: { username: string, email: string } ): void {

//     console.log(`Tu nombre de usuario es ${data.username} y tu email es ${data.email}`)

// }

// imprimirDatos({
//       username: 'freddier',
//       email: 'freddy@email.com'
// })
// En el ejemplo, el nombre data hace referencia al objeto que recibirá la función imprimirDatos. Por ello, para acceder al valor de username lo definimos en el console.log como data.username y para el email como data.email, pues así es como se accede a las propiedades de un objeto.

// Finalmente, cuando invocamos imprimirDatos y queremos enviar el objeto que nos pide como parámetro, simplemente se colocará entre llaves los atributos del mismo sin colocar un nombre de referencia como data tal como lo hicimos en la definición de la función.
