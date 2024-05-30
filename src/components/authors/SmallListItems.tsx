import type { author } from '../../types/authors';

export const SmallAuthorListItem = ({ author }: { author: (author) }) => {
    const { name, age } = author;
    return (
        <p>Name : {name} , Age : {age}</p>
    )
}

