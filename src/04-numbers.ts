(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice)

  let customerAge: number = 28;
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge)

  let productInStock: number = 10;
  console.log('productInStock', productInStock);

  if(productInStock>10){
    console.log('yes');
  }

  let discount = parseInt('100');
  console.log('discount', discount);

  if (discount<=200) {
    console.log('aplicar');
  }else{
    console.log('no aplicar');
  }

  let hex = 0xfff;
  console.log('hex', hex)
  let bin = 0b010101;
  console.log('bin', bin);


})();
