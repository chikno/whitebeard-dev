import { useState } from "react";
import styled from "styled-components";


type Props = {
    children: React.ReactNode;
}


const ModalBackground = styled.div`
position: absolute;
left: 0;
right: 0;
overflow: auto;
background: black;
width: 100%;
height: 100%;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 24px;
    background-color: wheat;
    width: 50%;
`;

export const Modal = ({ children }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            {show && (<ModalBackground onClick={() => setShow(false)}>
                <ModalContent onClick={e => e.stopPropagation()} >
                    <button onClick={() => setShow(false)}>Hide Modal</button>
                    {children}
                </ModalContent>
            </ModalBackground>)}
        </>

    )
}