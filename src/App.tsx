import React from 'react';

import { Card } from './components/card';
import { useProducts } from './hooks/use-products';
import { Product } from './types/product';
import { StickyNavbar } from './components/sticky-navbar';
import { useAddtoCart } from './store';
import { List } from './components/list';


function App() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div className='flex-1'>Loading...</div>
  }

  if (isError) {
    return <div className='flex-1'>An error occured</div>
  }

  return (
    <>
      <StickyNavbar />
      <div className='flex-1 gap-2 grid md:grid-cols-3 grid-cols-1'>
        <List className='relative m-10 w-full flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md'
         showActions={false} products={products} showAddtoCart={true} />
      </div>
    </>
  )
}

export default App
