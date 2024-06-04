import React from 'react'
import { Product } from '../types/product';
import { Card } from './card';


type Props = {
    products: Product[];
}
export const List = ({ products }: Props) => {

    const renderItem = React.useCallback(
        ({ product }: { product: Product }) => {
            return (
                <div >
                    <Card key={product.id}  product={product} />,
                </div>
            )
        }, []
    );

    return (
        <>
            {products && products.map((product: Product) => {
                return renderItem({ product })
            })}
        </>
    )
}
