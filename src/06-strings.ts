(()=>{
  let productTitle: string = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('Product Tittle', productTitle);

  const productDescription = 'The best product';
  let productPrice = 100;
  let isNew = false;

  const sumary = `
  tittle: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `

  console.log(sumary)

})();
