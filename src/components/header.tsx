import styled from "styled-components";

export default function Header () {
    return (
        <Cabecalho>
            Basic Typescript Calculator
        </Cabecalho>
    )
}

const Cabecalho = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem;
    background-color: #54afff;
`