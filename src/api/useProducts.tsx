import {useQuery} from 'react-query';
import {client} from './client';
import {ProductItemType} from '@types';

const getProducts = async () => {
  const {data} = await client.get('/products');
  return data;
};

export function useProducts() {
  return useQuery<ProductItemType[]>('products', getProducts);
}