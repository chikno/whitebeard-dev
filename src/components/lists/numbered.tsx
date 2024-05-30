type Props = {
    items: [];
    sourceName: string;
    ItemComponent: React.FC;
}

export const NumberedList = ({ items, sourceName, ItemComponent }: Props) => {
    return (
        <>
            {items.map((item: unknown, index: number) => {
                return (
                    <>
                        <h1>{index + 1}</h1> <ItemComponent key={index} {...{ [sourceName]: item }} />
                    </>
                )
            })}
        </>
    )
}
