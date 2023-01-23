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
