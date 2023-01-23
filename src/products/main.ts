import { calcStock, countProducts, products } from "./products.service";


countProducts({
  name: 'Prodct1',
  createdAt: new Date(1993/1/1),
  stock: 7,
})

countProducts({
  name: 'Prodct2',
  createdAt: new Date(1943/12/25),
  stock: 8,
  size: 'L'
})

console.log(products);
const total = calcStock();
console.log(total);
