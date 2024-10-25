import styled from "styled-components";

export default function Header () {
    return (
        <Cabecalho>
            CALCULATOR
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    height: 8svh;
    padding: 5px;
`