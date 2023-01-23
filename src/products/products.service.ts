import {Product} from './products.models'

export const products: Product[] = [];

export const countProducts = (data: Product)=>{
  products.push(data);
};

export const calcStock = ():number => {
  let total = 0;

  products.forEach((item)=>{
    total += item.stock;
  });

  return total;

}
