import React from 'react'
import { Product } from '../types/product'
import { ShoppingCart } from '../icons/shoping-cart';
import { useAddtoCart } from '../store';

type Props = {
  product: Product;
  removeProductFromCart: (id: number) => void;
  addProductToCart: (product: Product) => void;
}
const AddtoCartButton = ({ product, removeProductFromCart, addProductToCart }: Props) => {

  const products = useAddtoCart((state) => state.products);
  const [isProductInCart, setisProductInCart] = React.useState(false);

  React.useEffect(() => {
    setisProductInCart(products.includes(product));
  }, [products])

  return (
    <>
      {!isProductInCart ? <button onClick={() => {
        addProductToCart(product)
      }} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <ShoppingCart />
        Add to cart
      </button> : <button onClick={() => {
        removeProductFromCart(product?.id)
      }} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Remove from cart
      </button>}

    </>
  )
}

export default AddtoCartButton