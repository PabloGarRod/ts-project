(()=>{
  let prices = [1,2,3,4,8,25,165,'hola',true];
  prices.push(34);

  let products: (string|boolean|number|object)[] = ['hola', true];
  products.push(4);
  products.push(4);
  products.push({hola: 'hola'});
  products.push([]);


  console.log(products)

  let numbers = [1,2,3,4,8,25,165];
  console.log(numbers);

  numbers = numbers.map(item=> item*2);

  console.log(numbers);




})()
