import type { author } from '../../types/authors';

type Props = {
    items: [];
    sourceName : string;
    ItemComponent: React.FC;
}

export const RegularList = ({ items, sourceName, ItemComponent }: Props) => {
    return (
        <>
            {items.map((item:author, index:number) => {
                return <ItemComponent key={index} {...{ [sourceName]: item }} />
            })}
        </>
    )
}
