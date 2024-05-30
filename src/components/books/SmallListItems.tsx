import type { book } from '../../types/books';

export const SmallBookListItem = ({ book }: { book: (book) }) => {
  console.log(book);
    const { name, price } = book;
    return(<></>)
    return (
        <p>Name : {name} , Price : {price}</p>
    )
}

