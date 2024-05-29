import React from "react";
import styled from "styled-components"

type Props = {
    Left: () => JSX.Element;
    Right: () => JSX.Element;
    leftWidth: number;
    rightWidth: number;
    children: unknown
}

const Container = styled.div`
    display:flex;
`;
const Panel = styled.div`
    flex: ${props => props.flex};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }: Props) => {
    const [left, right] = children
    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>
            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    )
}