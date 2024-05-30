import type { author } from '../../types/authors';

export const LargeAuthorListItem = ({ author }: { author: author }) => {

    const { name, age, country, books } = author;
    return (
        <>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>Country : {country}</p>
            <h2>Books </h2>
            <ul>
                {books.map(book => <li key={book}>{book}</li>)}
            </ul>
        </>

    )
}

