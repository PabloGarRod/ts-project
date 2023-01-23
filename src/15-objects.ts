(()=>{
  type Sizes = 'S'|'M'|'L'|'XL';
  type Product = {
    tittle: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProducts = (data: Product)=>{
    products.push(data);
  };

  addProducts({
    tittle: 'patata',
    createdAt: new Date(1993/1/1),
    stock: 670,
   //size: 'L'
  })

  addProducts({
    tittle: 'patata',
    createdAt: new Date(1943/12/25),
    stock: 430,
    size: 'L'
  })


  console.log(products)

})();

// En TypeScript también podemos usar los Alias para definir la estructura de tipado que debería tener un objeto:

// //TypeScript
// type userData = {
//     username: string,
//     email: string
// }
// Y luego este “nuevo tipo” puede ser usado en un array, por ejemplo, para definir el tipado de los objetos que queramos añadir:

// //TypeScript
// type userData = {
//     username: string,
//     email: string
// }

// let usersList: userData[] = [];

// usersList.push({
//     username: "freddier", //CORRECTO
//     email: "freddy@email.com", //CORRECTO
// });
// usersList.push({
//     username: "cvander", //CORRECTO
//     email: true, // ERROR. Debe ser de tipo string y NO de tipo boolean
// });

