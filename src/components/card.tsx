import React from 'react'
import { Product } from '../types/product'
import { Rating } from './rating'
import { useAddtoCart } from '../store';
import AddtoCartButton from './add-to-cart-button';

type Props = {
    product: Product,

}

export const Card = ({ product }: Props) => {
    const addToCart = useAddtoCart((state) => state.addToCart);
    const removeFromCart = useAddtoCart((state) => state.removeFromCart);
    const addProductToCart = (product:Product) => {
        if (!product) return;
        addToCart(product);
    }

    const removeProductFromCart = (id: number) => {
        if (!id) return;
        removeFromCart(id);
    }

    return (
        <>
            <a className="relative mx-3 mt-3 flex overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">-{product?.discountPercentage} off</span>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product?.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">{product?.price}</span>
                    </p>
                    <div className="flex items-center">
                        <Rating rating={product?.rating} />
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product?.rating}</span>
                    </div>
                </div>

                <AddtoCartButton product={product} addProductToCart={addProductToCart} removeProductFromCart={removeProductFromCart} />
            </div>
        </>

    )
}

