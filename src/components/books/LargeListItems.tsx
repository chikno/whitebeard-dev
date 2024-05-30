import React from 'react'
import { book } from '../../types/books'

export const LargeBookListItems = ({ book }: { book: book }) => {
    const { name, price, title, pages } = book;
    return (
        <>
            <h2>{name}</h2>
            <p>{price}</p>
            <h2>Title : </h2>
            <p>{title}</p>
            <h2># Pages : </h2>
            <p>{pages}</p>
        </>

    )
}