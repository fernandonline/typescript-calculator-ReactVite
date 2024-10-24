import styled from "styled-components";

export default function Header () {
    return (
        <Cabecalho>
            TYPESCRIPT CALCULATOR
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    height: 7vh;
`